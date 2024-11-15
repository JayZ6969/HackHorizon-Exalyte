import React from 'react';

const classes = {
  container: "flex flex-col items-center bg-gray-200 gap-4",
  form: "flex flex-col w-full gap-4 bg-white p-6 rounded-xl shadow-md ",
  input: "border border-gray-300 p-2 rounded-lg",
  button: "bg-blue-500 text-white p-2 rounded-lg cursor-pointer",
  link: "text-blue-500 cursor-pointer"
};

const Login = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input type="email" placeholder="Email" className={classes.input} />
        <input type="password" placeholder="Password" className={classes.input} />
        <div className={classes.link}>Forgot Password?</div>
        <button type="submit" className={classes.button}>Log In</button>
      </form>
    </div>
  );
};

export default Login;