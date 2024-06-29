import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import cookieParser from "cookie-parser";
import cors from 'cors';
import commentRoute from './routes/comment.route.js';
import path from 'path';

dotenv.config();

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("connnected");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve(); 
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // Allow frontend origin
  credentials: true, // Allow cookies
}));
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});


app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/post',postRoute);
app.use('/api/comment',commentRoute);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*',(req,res)=> {
  res.sendFile(path.join(__dirname,'client','dist','index.html'));
})

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internel Server Error'
  console.error(err.stack);
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
});