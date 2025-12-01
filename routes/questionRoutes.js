import express from "express";
import {createQuestion,getAllQuestion,deleteQuestion} from "../controllers/questionController.js"

const router = express.Router();

router.post("/", createQuestion);
router.get("/", getAllQuestion);
// router.get("/:id", updateQuestion)
router.delete("/:id", deleteQuestion);

export default router;
