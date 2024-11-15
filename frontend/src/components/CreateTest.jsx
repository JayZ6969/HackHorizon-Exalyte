import React, { useState } from 'react';
import jsPDF from 'jspdf';

const classes = {
  container: "flex flex-col w-full justify-center gap-4 px-36", 
  input: "border border-gray-300 p-2 rounded w-full", 
  button: "flex w-36 items-center justify-center px-4 py-2 rounded-full shadow-lg bg-blue-500 text-white font-semibold cursor-pointer", 
  label: "font-semibold text-gray-800", 
  textarea: "border border-gray-300 p-2 rounded w-full h-32"
};

const CreateTest = () => {
  const [testName, setTestName] = useState('');
  const [questionType, setQuestionType] = useState('mcq');
  const [numMCQ, setNumMCQ] = useState(0);
  const [numDescriptive, setNumDescriptive] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [duration, setDuration] = useState('');
  const [questions, setQuestions] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const doc = new jsPDF();

    doc.text(`Test Name: ${testName}`, 10, 10);
    doc.text(`Type of Questions: ${questionType}`, 10, 20);
    if (questionType !== 'descriptive') {
      doc.text(`Number of MCQ Questions: ${numMCQ}`, 10, 30);
    }
    if (questionType !== 'mcq') {
      doc.text(`Number of Descriptive Questions: ${numDescriptive}`, 10, 40);
    }
    doc.text(`Difficulty: ${difficulty}`, 10, 50);
    doc.text(`Total Marks: ${totalMarks}`, 10, 60);
    doc.text(`Test Duration: ${duration} minutes`, 10, 70);
    doc.text(`Questions: ${questions}`, 10, 80);

    const pdfBlob = doc.output('blob');
    setPdf(URL.createObjectURL(pdfBlob));
  };

  return (
    <div className={classes.container}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <label className={classes.label}>Test Name</label>
        <input
          type="text"
          className={classes.input}
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          required
        />

        <label className={classes.label}>Upload PDF</label>
        <input
          type="file"
          className={classes.input}
          accept=".pdf"
          onChange={handleFileUpload}
          required
        />

        <label className={classes.label}>Type of Questions</label>
        <select
          className={classes.input}
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          required
        >
          <option value="mcq">MCQ</option>
          <option value="descriptive">Descriptive</option>
          <option value="both">Both</option>
        </select>

        {questionType !== 'descriptive' && (
          <>
            <label className={classes.label}>Number of MCQ Questions</label>
            <input
              type="number"
              className={classes.input}
              value={numMCQ}
              onChange={(e) => setNumMCQ(e.target.value)}
              required
            />
          </>
        )}

        {questionType !== 'mcq' && (
          <>
            <label className={classes.label}>Number of Descriptive Questions</label>
            <input
              type="number"
              className={classes.input}
              value={numDescriptive}
              onChange={(e) => setNumDescriptive(e.target.value)}
              required
            />
          </>
        )}

        <label className={classes.label}>Difficulty</label>
        <input
          type="text"
          className={classes.input}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        />

        <label className={classes.label}>Total Marks</label>
        <input
          type="number"
          className={classes.input}
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          required
        />

        <label className={classes.label}>Test Duration (in minutes)</label>
        <input
          type="number"
          className={classes.input}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button type="submit" className={classes.button}>Generate PDF</button>
      </form>

      {pdf && (
        <a href={pdf} target="_blank" rel="noopener noreferrer" className={classes.button}>
          View/Download PDF
        </a>
      )}
    </div>
  );
};

export default CreateTest;