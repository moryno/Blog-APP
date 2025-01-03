import express from "express";
import {
  getUserSavedPost,
  saveUserPost,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/saved", getUserSavedPost);
router.patch("/save", saveUserPost);

export default router;
