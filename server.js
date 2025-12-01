import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import questionRoutes from "./routes/questionRoutes.js"


dotenv.config()
connectDB()

const PORT = process.env.PORT || 8001
// ✅  ❌

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req,res)  => {
    res.send("Server is working...")
})


app.use("/api/question", questionRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} ✅`)
})