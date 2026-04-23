import { useState } from "react";

const JobForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    jobLink: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ company: "", role: "", jobLink: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-3">
      <input
        className="form-control mb-2"
        placeholder="Company"
        value={form.company}
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Role"
        value={form.role}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Job Link"
        value={form.jobLink}
        onChange={(e) =>
          setForm({ ...form, jobLink: e.target.value })
        }
      />

      <button className="btn btn-primary">Add Job</button>
    </form>
  );
};

export default JobForm;