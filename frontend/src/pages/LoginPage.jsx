import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/SignUp';

const classes = {
  container: "flex flex-col items-center justify-center h-screen gap-4",
  header: "text-4xl font-bold text-gray-800",
  selector: "flex items-center justify-center gap-4",
  selectorbuttons: "flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-gray-800 font-semibold cursor-pointer",
  activeButton: "bg-blue-500 text-white",
  inactiveButton: "bg-white text-gray-800"
};

const LoginPage = () => {
  const [activeButton, setActiveButton] = useState('login');
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    navigate(`/${button}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Exalyte</h1>
      <div className={classes.selector}>
        <div
          className={`${classes.selectorbuttons} ${activeButton === 'signup' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('signup')}
        >
          Sign Up
        </div>
        <div
          className={`${classes.selectorbuttons} ${activeButton === 'login' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('login')}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default LoginPage;