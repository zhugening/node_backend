import express from "express";
import { 
    createPostController, 
    deletedPostController, 
    getPostController, 
    likeAndDislikeController, 
    updatePostController ,
    getTimelinePostsController
    } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create-post", createPostController)

// update post
router.put("/update-post/:id", updatePostController);

// delete post
router.delete("/delete-post/:id", deletedPostController);

//like and dislike
router.put("/like-post/:id", likeAndDislikeController);

//get post
router.get("/get-post/:id", getPostController);

//timeline
router.get("/get-timeline-posts", getTimelinePostsController);

export default router;