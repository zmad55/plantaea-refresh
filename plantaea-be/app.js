import express from "express";
import cookieParser from "cookie-parser";
import User from "./routers/userRoutes.js";
import Plant from "./routers/plantRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import cors from "cors";

export const app = express();

// Cors-related
const corsOptions = {
    origin: process.env.DOMAIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.DOMAIN); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", User);
app.use("/api/plant", Plant);
app.use(notFound)
app.use(errorHandler)


