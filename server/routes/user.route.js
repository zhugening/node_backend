import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("These are the test Users");
    // console.log("The test api  path")
});


// module.exports = router;
export default router;