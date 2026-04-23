import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Screening", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    jobLink: String,
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);