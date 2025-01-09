const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleAIFileManager } =  require("@google/generative-ai/server");

// initialising using api key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const fileManager = new GoogleAIFileManager(process.env.API_KEY);



const model = genAI.getGenerativeModel({
  // Choose a Gemini model.
  model: "gemini-1.5-flash",
});

async function generateQuestions(numofmcq , numoftext, totalmarks) {
  // Upload the file and specify a display name.
  const uploadResponse = await fileManager.uploadFile("../uploads/Intro-to-cpp.pdf", {
    mimeType: "application/pdf",
    displayName: "Gemini 1.5 PDF",
  });

  // View the response.
  console.log(
    `Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`,
  );

  // Generate content using text and the URI reference for the uploaded file.
  const result = await model.generateContent([
    {
      fileData: {
        mimeType: uploadResponse.file.mimeType,
        fileUri: uploadResponse.file.uri,
      },
    },
    { text: `Generate a set of questions based on the document provided. The questions should cover key topics and concepts accurately. Follow these guidelines:
Question Count and Type:
Create ${numofmcq} multiple-choice questions (MCQs).
Create ${numoftext} short-answer/text-based questions.
Ensure each question type is distinct and does not overlap in content.
Difficulty Level and Distribution:
Vary the difficulty levels: include basic, intermediate, and advanced questions.
Distribute the difficulty levels evenly across both MCQs and text-based questions.
MCQs:
Provide 4 answer choices per MCQ, with only one correct answer.
Ensure choices are plausible to avoid obvious answers.
Text-Based Questions:
Frame the text-based questions to encourage critical thinking or detailed responses.
Clarity and Relevance:
Ensure each question directly reflects important information or concepts within the document."
Total Marks Requirement:
The total marks for all questions combined must add up to ${totalmarks} marks exactly.
Distribute the total marks across question types as follows:
Assign 1 mark to each multiple-choice question (MCQ).
Assign 3-5 marks in total to the short-answer questions, dividing this amount equally or logically across all text-based questions.` },
  ]);

  // Output the generated text to the console
  return result.response.text();
}

module.exports = generateQuestions;