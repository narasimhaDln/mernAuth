import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connection from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoute from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Setup dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  app.use(express.static(path.join(__dirname, "/Frontend/vite-project/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "Frontend", "vite-project", "dist", "index.html")
    );
  });
}

// Start server
app.listen(PORT, () => {
  connection();
  console.log(`server running on port ${PORT}`);
});
