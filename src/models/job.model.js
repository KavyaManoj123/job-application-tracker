import mongoose from 'mongoose';

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
      enum: [
        'Bookmarked',
        'Applied',
        'Interview',
        'Offer',
        'Accepted',
        'Rejected',
      ],
      default: 'Bookmarked',
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

export default mongoose.model('Job', jobSchema);
