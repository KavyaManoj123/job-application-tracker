import { useMemo } from 'react';

const statusColors = {
  Applied: '#6c757d',
  Screening: '#0d6efd',
  Interview: '#ffc107',
  Offer: '#198754',
  Rejected: '#dc3545',
};

const JobCard = ({ job, onDelete, onStatusChange }) => {
  // Format date nicely
  const formattedDate = useMemo(() => {
    if (!job.appliedDate) return 'N/A';

    return new Date(job.appliedDate).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }, [job.appliedDate]);

  const statusColor = statusColors[job.status] || '#6c757d';

  return (
    <div
      className="card mb-3 shadow-sm p-2"
      style={{
        borderLeft: `6px solid ${statusColor}`,
        borderRadius: '10px',
      }}
    >
      <div className="card-body p-1">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div>
            <h5 className="mb-1">{job.company}</h5>
            <p className="mb-0 text-muted">{job.role}</p>
          </div>

          <span
            style={{
              background: statusColor,
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '12px',
            }}
          >
            {job.status}
          </span>
        </div>

        {/* Date */}
        <p className="text-muted mb-2" style={{ fontSize: '13px' }}>
          Applied on: {formattedDate}
        </p>

        {/* Status Dropdown */}
        <select
          className="form-select mb-3"
          value={job.status}
          onChange={e => onStatusChange(job._id, e.target.value)}
        >
          <option>Applied</option>
          <option>Screening</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        {/* Actions */}
        <div className="d-flex justify-content-between align-items-center">
          <a
            href={job.jobLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm"
          >
            🔗 View Job
          </a>

          <button
            onClick={() => onDelete(job._id)}
            className="btn btn-outline-danger btn-sm"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
