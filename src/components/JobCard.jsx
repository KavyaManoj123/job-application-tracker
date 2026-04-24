import { useMemo } from 'react';
import { JOB_STATUSES, STATUS_COLORS } from '../constants/jobStatuses';

const normalizeStatus = status => {
  const statusMap = {
    Screening: 'Applied',
    Interviewing: 'Interview',
  };

  return statusMap[status] || status || 'Applied';
};

const JobCard = ({ job, onDelete, onStatusChange }) => {
  const normalizedStatus = useMemo(
    () => normalizeStatus(job.status),
    [job.status]
  );

  const formattedDate = useMemo(() => {
    if (!job.appliedDate) return 'N/A';

    return new Date(job.appliedDate).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }, [job.appliedDate]);

  const statusColor = STATUS_COLORS[normalizedStatus] || '#4f6d8a';

  return (
    <article
      className="job-card"
      style={{ borderLeft: `4px solid ${statusColor}` }}
    >
      <div className="job-card-body">
        <div className="job-card-header">
          <div className="job-card-main">
            <h3 className="job-company mb-1">{job.company}</h3>
            <p className="job-role mb-0">{job.role}</p>
          </div>
          <div className='job-card-rigth'>
            <p className="job-date">{formattedDate}</p>
            <span
              className="job-status-pill"
              style={{ background: statusColor }}
            >
              {normalizedStatus}
            </span>
          </div>
        </div>

        <div className="job-card-bottom">
          <div className="job-card-controls">
            <select
              className="form-select job-status-select"
              value={normalizedStatus}
              onChange={e => onStatusChange(job._id, e.target.value)}
            >
              {JOB_STATUSES.map(status => (
                <option key={status}>{status}</option>
              ))}
            </select>

            <div className="job-card-actions">
              <a
                href={job.jobLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-xs job-action-btn"
              >
                Link
              </a>

              <button
                onClick={() => onDelete(job._id)}
                className="btn btn-outline-danger btn-xs job-action-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
