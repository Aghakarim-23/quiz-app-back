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

// export const updateQuestion = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const existingQuestionWithId = await Question.findById(id);

//     res.json(existingQuestionWithId)
//     console.log(existingQuestionWithId)
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findByIdAndDelete(id);

    if (!question)
      return res.status(404).json({ message: "Question is not found" });
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
