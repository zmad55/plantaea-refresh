import express from "express";

import { register } from "../controllers/User.js"
import { login } from "../controllers/User.js"
import { logout } from "../controllers/User.js"
import { isAuthenticated } from "../controllers/User.js"

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").post(isAuthenticated);
router.route("/logout").post(logout);

export default router;