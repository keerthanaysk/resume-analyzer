import { Router } from "express";
import { candidates, jobs } from "../data/store";

const router = Router();

router.post("/:jobId", (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.jobId));
  if (!job) return res.status(404).json({ error: "Job not found" });

  const rankedCandidates = candidates
    .map(c => ({
      ...c,
      matchScore: c.skills.filter((skill: string) => job.requiredSkills.includes(skill)).length
    }))
    .sort((a, b) => b.matchScore - a.matchScore);

  res.json({ jobId: job.id, rankedCandidates });
});

export default router;
