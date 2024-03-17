import PostModel from "../models/post.model.js";

export const createPost = async (body) => {
    try {
        const newPost = new postModel(body);

        await newPost.save();

        return newPost;
    } catch (error) {
        throw error;
    }
};


export const updatedPost = async (params, body) => {
    try {
        const updatedPost = await PostModel.findById(params.id);
        if (updatedPost.userId === body.userId) {
            await PostModel.updatedOne(
                {
                $set: body,
                }, 
                {
                new: true,
                }
            );
            return updatedPost;
        } else {
            throw new Error("You can update only your post")
        }
    } catch (error) {
        throw error;
    }
}

