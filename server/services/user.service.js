import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";


export const updateUser = async (userId, updateData) =>{
    if (updateData.password) {
        try {
            updateData.password = await bcrypt.hashSync(updateData.password, 10);
        } catch (err) {
            throw err;
        }
    }
    try {
        const user = await UserModel.findByIdAndUpdate(
            userId, 
            {
            $set:updateData
            },
            {
             new: true,
            }
            );
            return user;
    } catch (err){
        throw err;
    }
};

export const deleteUser = async (userId) => {
    try {
        await UserModel.findByIdAndDelete(userId);
    } catch (err) {
    throw err;
    }
};


export const getUser = async (userId) =>{
    try {
        const user = await UserModel.findById(userId);
        return user;
    } catch (err) {
        throw err;
    }
};

export const followUser = async (userdata, updateData) => {
   if(userdata.userId === updateData.id){
    throw new Error("You cannot follow yourself") 
   }else{
    try {
        const user = await UserModel.findById(userdata.userId)
        const currentUser = await UserModel.findById(updateData.id);
        if (user.follow.includes(userdata.userId)) {
            await user.updateOne({$push: { followers: userdata.userId }});
            await currentUser.updateOne({$push: { followings: updateData.id }});
            return {user, currentUser };
        }else{
            throw new Error ("You have already followed this user")
        }
       } catch (error){
        throw err
       }
   } 
};

export const unfollowUser = async (userdata, updateData) => {
    if(!userdata.userId === updateData.id){
     try {
         const user = await UserModel.findById(userdata.userId)
         const currentUser = await UserModel.findById(updateData.id);
         if (user.follow.includes(userdata.userId)) {
             await user.updateOne({$pull: { followers: userdata.userId }});
             await currentUser.updateOne({$pull: { followings: updateData.id }});
             return { user, currentUser };
         }else{
             throw new Error("You don't follow this user")
         }
        } catch (error){
         throw err
        }
    }else{
     throw new Error("You cannot unfollow yourself")
    } 
 };