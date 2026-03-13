import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("server is running");
});
