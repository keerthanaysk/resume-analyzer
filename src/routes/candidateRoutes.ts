import { Router, Request, Response } from "express";
import { candidates } from "../data/store";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { name, email, skills } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email required" });
  if (!Array.isArray(skills)) return res.status(400).json({ error: "Skills must be an array" });

  const candidate = { id: candidates.length + 1, name, email, skills };
  candidates.push(candidate);
  res.json({ message: "Candidate added", candidate });
});

router.get("/", (req: Request, res: Response) => {
  res.json({ candidates });
});

export default router;
