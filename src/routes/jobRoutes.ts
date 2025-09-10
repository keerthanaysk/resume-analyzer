import { Router, Request, Response } from "express";
import { jobs } from "../data/store";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { title, description, requiredSkills } = req.body;
  if (!title || !description) return res.status(400).json({ error: "Title and description required" });
  if (!Array.isArray(requiredSkills)) return res.status(400).json({ error: "requiredSkills must be an array" });

  const job = { id: jobs.length + 1, title, description, requiredSkills };
  jobs.push(job);
  res.json({ message: "Job added", job });
});

router.get("/", (req: Request, res: Response) => {
  res.json({ jobs });
});

export default router;
