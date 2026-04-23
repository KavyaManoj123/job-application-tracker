import { useEffect, useState } from 'react';
import { getJobs, createJob, updateJob, deleteJob } from '../api/job.api';

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

//   const fetchJobs = async () => {
//     setLoading(true);
//     try {
//       const res = await getJobs();
//       setJobs(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

  const addJob = async data => {
    const res = await createJob(data);
    setJobs(prev => [res.data, ...prev]);
  };

  const editJob = async (id, data) => {
    const res = await updateJob(id, data);
    setJobs(prev => prev.map(job => (job._id === id ? res.data : job)));
  };

  const removeJob = async id => {
    await deleteJob(id);
    setJobs(prev => prev.filter(job => job._id !== id));
  };

  useEffect(() => {
    let isMounted = true;

    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await getJobs();
        if (isMounted) {
          setJobs(res.data); // adjust if needed
        }
      } catch (err) {
        console.error('Fetch jobs error:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  return { jobs, loading, addJob, editJob, removeJob };
};
