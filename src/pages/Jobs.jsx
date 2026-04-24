import JobCard from '../components/JobCard';
import JobForm from '../components/JobForm';
import { useJobs } from '../hooks/useJobs';
import Dashboard from './Dashboard';

const Jobs = () => {
  const { jobs, addJob, editJob, removeJob, loading } = useJobs();

  return (
    <div className="jobs-page">
      <div className="jobs-shell">
        <Dashboard jobs={jobs} loading={loading} />
        <JobForm onAdd={addJob} />

        <section className="job-list-section">
          <div className="section-header">
            <h2 className="section-title mb-0">My Jobs</h2>
            <span className="job-count-badge">{jobs.length}</span>
          </div>

          <div className="job-list">
            {jobs.map(job => (
              <JobCard
                key={job._id}
                job={job}
                onDelete={removeJob}
                onStatusChange={(id, status) => editJob(id, { status })}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jobs;
