import PostModel from "../models/post.model.js";

export const createPost = async (body) => {
    try {
        const newPost = new PostModel(body);

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
};

export const deletePost = async (params, body) => {
    try {
        const deletedPost = await PostModel.findById(params.id);
        if (deletedPost.userId === body.userId) {
            await PostModel.deletedOne();
            return deletedPost;
        } else {
            throw new Error("You can delete only your post")
        }
    } catch (error) {
        throw error;
    }
};

export const likeAndDislike = async (params, body) => {
    try {
        const post = await PostModel.findById(param.id);
        if (!post.likes.includes(body.userId)) {
            await post.updateOne({$push:{likes: body.userId }})
        } else {
            await post.updateOne({$pull: { likes: body.userId }})
        }
        return post;
        
    } catch (error) {
        throw error;
    }
};