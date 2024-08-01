import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an instance of the express app
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "../src/routes/user.router.js";

app.use("/api/v1/users", userRouter);
export default app;
