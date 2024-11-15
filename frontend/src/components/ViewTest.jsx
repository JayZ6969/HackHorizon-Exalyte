import React, { useState, useEffect } from 'react';

const classes = {
  container: "flex flex-col items-center justify-center gap-4 px-48",
  testItem: "border border-gray-300 p-4 rounded w-full",
  label: "font-semibold text-gray-800",
  button: "bg-blue-500 text-white p-2 rounded cursor-pointer"
};

const ViewTest = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    // Fetch the previously generated tests from local storage or an API
    const storedTests = JSON.parse(localStorage.getItem('tests')) || [];
    setTests(storedTests);
  }, []);

  return (
    <div className={classes.container}>
      <h1 className={classes.label}>Previous Tests</h1>
      {tests.length === 0 ? (
        <p>No tests available</p>
      ) : (
        tests.map((test, index) => (
          <div key={index} className={classes.testItem}>
            <p><strong>Test Name:</strong> {test.testName}</p>
            <p><strong>Type of Questions:</strong> {test.questionType}</p>
            <p><strong>Number of MCQ Questions:</strong> {test.numMCQ}</p>
            <p><strong>Number of Descriptive Questions:</strong> {test.numDescriptive}</p>
            <p><strong>Difficulty:</strong> {test.difficulty}</p>
            <p><strong>Total Marks:</strong> {test.totalMarks}</p>
            <p><strong>Duration:</strong> {test.duration} minutes</p>
            <p><strong>Questions:</strong> {JSON.stringify(test.questions)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewTest;