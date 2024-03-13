import express from "express";
import { deleteUserController, followUserController, getUserController, updateUserController , unfollowUserController} from "../controllers/user.controller.js";

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("These are the test Users");
//     // console.log("The test api  path")
// });

//update USER
router.put("/:id", updateUserController)
//delete User
router.delete("/:id", deleteUserController)
//get USER
router.get("/:id", getUserController)

//follow a user
router.put("/folow/:id", followUserController)

//unfollow User
router.put("/unfolow/:id", unfollowUserController)
// module.exports = router;

export default router;