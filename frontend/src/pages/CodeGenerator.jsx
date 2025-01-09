import React from 'react'

const classes = {
    container: "flex flex-col items-center justify-center bg-white gap-4 h-screen",
    div1: "text-3xl pb-[20px]",
    div: "text-3xl",
    span: "text-blue-600",
    h1: "text-4xl pb-[50px] font-bold",
    h2: "text-3xl py-[20px] font-bold"
}
const testCode = "EID23D";
const QRCode = "QR Code";
const CodeGenerator = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.h1}>Test Created <span className={classes.span}>Successfully!</span></h1>
        <div className={classes.div}>Join Code: {testCode}</div>
        <h2 className={classes.h2}>OR</h2>
        <div className={classes.div1}>Scan QR Code</div>
        <div className={classes.div}>{QRCode}</div>
    </div>
  )
}

export default CodeGenerator