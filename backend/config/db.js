import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/uit_demo";
function connectDB() {
    try {
        mongoose.connect(URI);
        console.log("Connect to MongoDB success");
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;
