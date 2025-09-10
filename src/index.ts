import express from "express";
import dotenv from "dotenv";
import candidateRoutes from "./routes/candidateRoutes";
import jobRoutes from "./routes/jobRoutes";
import analyzeRoutes from "./routes/analyzeRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Routes
app.use("/candidates", candidateRoutes);
app.use("/jobs", jobRoutes);
app.use("/analyze", analyzeRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Root
app.get("/", (req, res) => {
  res.send("Resume Analyzer API is running 🚀");
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
