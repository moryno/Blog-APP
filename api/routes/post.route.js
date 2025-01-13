import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import updateVisit from "../middlewares/increaseVisit.js";
import { authenticate, verifyAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", updateVisit, getPost);
router.post("/", authenticate, createPost);
router.delete("/:id", deletePost);
router.patch("/feature", verifyAdmin, featurePost);

export default router;
