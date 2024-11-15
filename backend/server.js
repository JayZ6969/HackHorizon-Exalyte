const express = require("express")
const connectDB = require("./config/db.js")
const creatorRouter = require("./routes/creatorRoutes.js")


const app = express()
app.use(express.json());



// routes
app.use("/api/creator/", creatorRouter)


connectDB()




const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});