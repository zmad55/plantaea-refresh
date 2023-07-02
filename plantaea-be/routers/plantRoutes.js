import express from "express";

import { fetchAllPlants } from "../controllers/plantController.js"
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.get('/fetchPlants', fetchAllPlants);

export default router;