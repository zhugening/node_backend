import { createPost , updatedPost } from "../services/post.service.js";

export const createPostController = async(req, res) => {
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost,
            message: "Post has been created Successfully"
        });
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            message: "Post creation Failed",
            err,
        });
    }
};


export const updatePostController = async(req, res) => {
    try {
        const updatedPost = await updatedPost(req.params, req.body);
        res.status(200).json({
            updatedPost,
            message: "Post has been updated Successfully"
        });
    } catch (err) {
        // console.log(err)
        res.status(500).json({
            message: "Post updated failed",
            err,
        });
    }
};