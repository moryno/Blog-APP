import express from "express";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/comment.controller.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", authenticate, createComment);
router.get("/:postId", getComments);
router.delete("/:id", deleteComment);

export default router;
