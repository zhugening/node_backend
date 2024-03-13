import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt"
import { loginUser, registerUser } from "../services/auth.service.js";
// Register

export const register = async (req, res)=>{
    try {
        const newUser = await registerUser(req.body);

        const {password, ...data} = newUser._doc;

        res.status(200).json({
            data,
            message: "User has been registered succesfully",
        });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occurred Registered succesfully",
        });
        console.log(error)
    }
}

// export const login = async (req, res ) => {
//     try {
//         const loggedInUser = await loginUser(req.body)
//         // const {password, ...data} = loggedInUser._doc;

//         res.status(200).json({
//             message: "User logged In succesfully",
//             data,
//         })
//     } catch (error) {
//         res.status(500).json({
//             error: error,
//             message: "Error Occurred Logging the User",
//         });
//         console.log(error);
//     }
// };

export const login = async (req, res ) => {
    try {
        const data = await deleteUser(req.params.id)
        // const {password, ...data} = loggedInUser._doc;

        res.status(200).json({
            message: "User logged In succesfully",
            data,
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Error Occurred Deleting the User",
        });
        console.log(error);
    }
};

// export const register = async (req, res)=>{
//     try {
//         const hashedPassword = bcrypt.hashSync(req.body.password, 10); 
//         const newUser = new UserModel({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword,
//         });

//         const {password, ...data} = newUser._doc;

//         await newUser.save();
//         res.status(200).json({
//             data,
//             message: "User has been registered succesfully",
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error,
//             message: "Error Occurred Registered succesfully",
//         });
//         console.log(error)
//     }
// }



// export const register = async (req, res)=>{
//     try {
//         const newUser = new UserModel({
//             username: "Wutthipan",
//             email: "wutthipan.p@egat.co.th",
//             password: "ng12345",
//         });
//         await newUser.save();
//         res.status(200).json({
//             newUser,
//             message: "User has been registered succesfully",
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error,
//             message: "Error Occurred Registered succesfully",
//         });
//         console.log(error)
//     }
// }