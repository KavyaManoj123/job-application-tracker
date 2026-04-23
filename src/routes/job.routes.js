import express from "express";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;