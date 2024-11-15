import React from 'react'

const classes = {
    container:"flex flex-col items-center justify-center bg-gray-100 h-screen",
    input:"border-2 border-gray-300 rounded-lg py-[10px] font-semibold px-[5px]",
    button:"bg-blue-500 text-white font-bold my-[20px] py-[10px] rounded-lg center w-1/2 text-center",
    head: "text-4xl font-bold text-gray-800 pb-[70px]",
    form:"flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg",
    label:"text-xl font-bold text-gray-800 p-5"
}
const Join = () => {
  return (
    <div className= {classes.container}>
    <h2 className={classes.head}>EXALYTE</h2>
    <form className={classes.form}>
    <label className={classes.label}>Enter Code:   <input className={classes.input} type="text" placeholder=""/></label>
    <div className={classes.button}>Join Test</div>
    </form>
    </div>
  )
}

export default Join