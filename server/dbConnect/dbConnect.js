import mongoose from "mongoose";


export const dbConnect = ()=>{
    try {
        // mongoose.connect(process.env.DB_URL)
        mongoose.connect("mongodb://localhost:27017/yt",{
            // useNewUrlParser: true,
        })
        console.log("database has been connect succesfully")
    }catch (error) {
        console.log(error)
    }
}