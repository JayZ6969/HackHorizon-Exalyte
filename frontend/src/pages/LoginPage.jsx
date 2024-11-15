import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const classes = {
  container: "flex flex-col items-center justify-center gap-4",
  header: "text-4xl font-bold text-gray-800",
  selector: "flex items-center justify-center gap-4",
  selectorbuttons: "flex items-center justify-center px-4 py-2 rounded-lg shadow-lg text-gray-800 font-semibold cursor-pointer",
  activeButton: "bg-blue-500 text-white",
  inactiveButton: "bg-white text-gray-800"
};

const LoginPage = () => {
  const [activeButton, setActiveButton] = useState('Signup');
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    navigate(`/${button}`);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Exalyte</h1>
      <div className={classes.selector}>
        <button
          className={`${classes.selectorbuttons} ${activeButton === 'Signup' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('Signup')}
        >
          Sign Up
        </button>
        <button
          className={`${classes.selectorbuttons} ${activeButton === 'Login' ? classes.activeButton : classes.inactiveButton}`}
          onClick={() => handleButtonClick('Login')}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;