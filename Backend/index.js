import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI
// Mongo DB connection

   mongoose.connect(URI).then(() => {
    console.log("Connected to mongodb");
   }).catch((error) => {
    console.error("Error", error);  
   })

//Defining Routes

app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})