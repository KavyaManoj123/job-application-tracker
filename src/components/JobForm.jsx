import { useState } from "react";
import { JOB_STATUSES } from "../constants/jobStatuses";

const JobForm = ({ onAdd }) => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [form, setForm] = useState({
    company: "",
    role: "",
    jobLink: "",
    status: "Bookmarked",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ company: "", role: "", jobLink: "", status: "Bookmarked" });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form-card">
      <div className="form-header">
        <h2 className="section-title mb-0">Add Job</h2>
        <button
          type="button"
          className="btn btn-sm form-toggle-btn"
          onClick={() => setIsMinimized(prev => !prev)}
        >
          {isMinimized ? 'Open' : 'Min'}
        </button>
      </div>

      {!isMinimized && (
        <div className="form-body">
          <input
            className="form-control job-input"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          <input
            className="form-control job-input"
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />

          <input
            className="form-control job-input"
            placeholder="Job Link"
            value={form.jobLink}
            onChange={(e) => setForm({ ...form, jobLink: e.target.value })}
          />

          <select
            className="form-select job-input"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            {JOB_STATUSES.map(status => (
              <option key={status}>{status}</option>
            ))}
          </select>

          <button className="btn btn-primary job-submit-btn">Save</button>
        </div>
      )}
    </form>
  );
};

export default JobForm;
