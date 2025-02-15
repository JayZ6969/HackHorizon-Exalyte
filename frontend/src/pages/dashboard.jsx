import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


const classes = {
  container: "flex flex-col w-full items-center justify-center gap-4",
  header1: "text-4xl font-bold text-gray-800",
  header2: "text-2xl font-bold text-gray-800",
  section: "flex items-center justify-center gap-4",
  button: "flex items-center justify-center px-4 py-2 rounded-full shadow-lg text-gray-800 font-semibold cursor-pointer",
  activeButton: "bg-blue-500 text-white",
  inactiveButton: "bg-white text-gray-800"
};

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState('CreateTest');
  const navigate = useNavigate();
  const username = "Username"; // Replace with actual username logic

  const handleButtonClick = (button) => {
    setActiveButton(button);
    navigate(`/${button}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header1}>Exalyte</h1>
      <h1 className={classes.header2}>Welcome back {username}!</h1>
      <div className={classes.section}>
        <div
          className={`${classes.button} ${activeButton === 'CreateTest' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('CreateTest')}
        >
          Create Tests
        </div>
        <div
          className={`${classes.button} ${activeButton === 'ViewTest' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('ViewTest')}
        >
          View Tests
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;