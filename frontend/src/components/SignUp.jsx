import React from 'react';

const classes = {
  container: "flex flex-col items-center bg-gray-200 gap-4",
  form: "flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md",
  input: "border border-gray-300 p-2 rounded-lg",
  button: "bg-blue-500 text-white p-2 rounded-lg cursor-pointer"
};

const SignUp = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input type="text" placeholder="Username" className={classes.input} />
        <input type="email" placeholder="Email" className={classes.input} />
        <input type="password" placeholder="Password" className={classes.input} />
        <input type="password" placeholder="Confirm Password" className={classes.input} />
        <button type="submit" className={classes.button}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;