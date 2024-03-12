import express from "express";
import { deleteUserController, getUserController, updateUserController } from "../controllers/user.controller.js";

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
// module.exports = router;
export default router;