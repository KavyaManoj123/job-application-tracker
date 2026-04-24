import { JOB_STATUSES } from '../constants/jobStatuses';

const normalizeStatus = status => {
  const normalized = (status || '').trim().toLowerCase();

  const statusMap = {
    bookmarked: 'Bookmarked',
    applied: 'Applied',
    screening: 'Applied',
    interview: 'Interview',
    interviewing: 'Interview',
    offer: 'Offer',
    accepted: 'Accepted',
    rejected: 'Rejected',
  };

  return statusMap[normalized] || 'Applied';
};

const Dashboard = ({ jobs = [], loading = false }) => {
  const counts = JOB_STATUSES.reduce((acc, status) => {
    acc[status] = 0;
    return acc;
  }, {});

  jobs.forEach(job => {
    counts[normalizeStatus(job.status)] += 1;
  });

  return (
    <section className="dashboard-panel">
      <div className="dashboard-panel-header">
        <h2 className="dashboard-title mb-0">Job Tracker</h2>
        <span className="dashboard-meta">{loading ? 'Loading...' : jobs.length}</span>
      </div>

      <div className="status-strip" role="list" aria-label="Job summary">
        {JOB_STATUSES.map(status => (
          <article key={status} role="listitem" className="status-card">
            <span className="status-count">{counts[status]}</span>
            <span className="status-label">{status}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
