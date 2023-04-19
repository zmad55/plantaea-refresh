import express from "express";
import { createUser } from "./../controllers/User.js"

const router = express.Router();

router.route("/createUser").post(createUser);

export default router;