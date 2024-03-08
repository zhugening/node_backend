import userModel from "../models/user.models.js";

// Register


export const register = async (req, res) =>{
    try {
        const newUser = new userModel({
            username:"wutthipan",
            email:"wutthipan.p@egat.co.th",
            password:"ng12345",
        })
        await newUser.save();
        res.status(200).json({
            newUser,
            message: "User has been registered succesfully",
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occurred Registered succesfully",
        });
        console.log(error)
    }
}