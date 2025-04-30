import { Router } from "express";
import { getReactions, createReaction, deleteReaction } from "../../controllers/ReactionsConts.js";

const router = Router();

// Routes
router.get("/", getReactions); // Get all reactions
router.post("/", createReaction); // Create a new reaction

export default router;
