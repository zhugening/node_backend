import express from "express";
import { createPostController, updatePostController } from "../controllers/post.controller.js";
const router = express.Router();

router.post("/create-post", createPostController)

// update post
router.post("/update-post/:id", updatePostController);

export default router;