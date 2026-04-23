import JobCard from '../components/JobCard';
import JobForm from '../components/JobForm';
import { useJobs } from '../hooks/useJobs';
import Dashboard from './Dashboard';

const Jobs = () => {
  const { jobs, addJob, editJob, removeJob } = useJobs();

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Job Tracker</h2>
      <Dashboard />
      <JobForm onAdd={addJob} />

      {jobs.map(job => (
        <JobCard
          key={job._id}
          job={job}
          onDelete={removeJob}
          onStatusChange={(id, status) => editJob(id, { status })}
        />
      ))}
    </div>
  );
};

export default Jobs;
