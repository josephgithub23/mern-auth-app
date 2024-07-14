import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";

const __dirname = path.resolve();
const app = express();

/**8
 * Defining the static path
 */
app.use(express.static(path.join(__dirname, "/client/dist")));

/***
 * So here whenever we get to any req from the seaver it goes inside the path inside the client file and the dist , to the the root file index.html and send to the client
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

/***
 * Use path method to resolve the directory name. this helps to find the directory in any server.
 */

dotenv.config();
app.use(cors());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
