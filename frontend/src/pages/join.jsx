import React from 'react'

const classes = {
    container:"flex flex-col items-center justify-center bg-gray-100 h-screen",
    input:"border-2 border-gray-500 rounded-lg p-2 m-2",
    button:"bg-blue-500 text-white font-bold py-2 px-4 rounded-[40px] center w-1/2 text-center",
    head:"text-3xl font-bold",
    form:"flex flex-col items-center justify-center",
}
const Join = () => {
  return (
    <div className= {classes.container}>
    <h2 className={classes.head}>EXALYTE</h2>
    <form className={classes.form}>
    <label>Enter Code: <input className={classes.input} type="text" placeholder=""/></label>
    <div className={classes.button}>Join Test</div>
    </form>
    </div>
  )
}

export default Join