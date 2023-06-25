import express from "express";

import { userRegister, userLogin, userLogout, getUserProfile } from "../controllers/userController.js"
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router
    .route('/profile')
    .get(protect, getUserProfile);

export default router;