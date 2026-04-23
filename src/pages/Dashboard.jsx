import { useEffect } from "react";
import { useJobs } from "../hooks/useJobs";

const Dashboard = () => {
  const { jobs, fetchJobs } = useJobs();

  // Auto refresh every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchJobs();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const total = jobs.length;
  const interviews = jobs.filter(j => j.status === "Interview").length;
  const offers = jobs.filter(j => j.status === "Offer").length;

  return (
    <div className="container mt-3">
      <div className="row g-3">
        
        {/* Total */}
        <div className="col-4">
          <div className="card text-white bg-primary shadow-sm text-center p-3">
            <h6 className="mb-1">Total</h6>
            <h3>{total}</h3>
          </div>
        </div>

        {/* Interviews */}
        <div className="col-4">
          <div className="card text-dark bg-warning shadow-sm text-center p-3">
            <h6 className="mb-1">Interviews</h6>
            <h3>{interviews}</h3>
          </div>
        </div>

        {/* Offers */}
        <div className="col-4">
          <div className="card text-white bg-success shadow-sm text-center p-3">
            <h6 className="mb-1">Offers</h6>
            <h3>{offers}</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;