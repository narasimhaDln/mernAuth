import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connection from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoute from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Setup dirname in ESM
// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("this is get route...!");
});

app.use("/api/auth", authRoute);

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "Frontend", "vite-project", "dist");
  console.log("Serving static from:", buildPath);

  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}
// Start server
app.listen(PORT, () => {
  connection();
  console.log(`server running on port ${PORT}`);
});
