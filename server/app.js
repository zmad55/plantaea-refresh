import express from "express";
import cookieParser from "cookie-parser";
import User from "./routers/User.js";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", User);
