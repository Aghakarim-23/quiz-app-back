import Question from "../models/Question.js";

export const createQuestion = async (req, res) => {
  try {
    const { title, description, options } = req.body;

    const correctCount = options.filter((opt) => opt.isCorrect === true).length;

    if (correctCount !== 1) {
      return res
        .status(400)
        .json({ message: "There must be exactly ONE correct answer." });
    }

    console.log(correctCount);

    const question = await Question.create({ title, description, options });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllQuestion = async (req, res) => {
  try {
    const questions = await Question.find();

    if (questions.length === 0)
      return res.status(404).json({ message: "Questions not found!" });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
