import { Router } from "express";
const router = Router();
// Import API routes
import thoughtRoutes from "./ThoughtsRoutes.js";
import { userRoutes } from "./UserRoutes.js";

// ALL ROUTES are prefixed with '/api'
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

export default router;