import express from "express";
import cors from "cors";
import router from "../llamabackend/router/llama.js";
//Initializing express app
const app = express();

//Defining PORT
const PORT = process.env.PORT || 4500

//Defining middlewares for express app
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
      res.send("wlc home")
})
app.get('/api')
app.use("/api",router)
//Listening to express server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});