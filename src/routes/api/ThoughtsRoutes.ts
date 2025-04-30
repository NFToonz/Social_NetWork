import { Router } from "express";
import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,

} from "../../controllers/ThoughtsConts.js";

const router = Router();

// 'api/thoughts' routes
router.route("/").get(getThoughts).post(createThought);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

export default router;