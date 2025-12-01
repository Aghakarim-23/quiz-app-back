import express from "express";
import {createQuestion,getAllQuestion} from "../controllers/questionController.js"

const router = express.Router();

router.post("/", createQuestion);
router.get("/", getAllQuestion);
// router.delete("/", deleteQuestion);

export default router;
