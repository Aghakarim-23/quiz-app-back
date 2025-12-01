import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB is connected ✅`)
    } catch (error) {
        console.log(`Mongo DB is not connected ❌`, error)
    }
}

export default connectDB