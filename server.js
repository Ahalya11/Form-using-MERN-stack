const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db2');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const app=express();
const port=process.env.PORT || 3000;
connectDB();
app.use(cors());
app.use(express.json());

const usersRouter=require('./routes2/users2');
app.use('/users2',usersRouter);
app.listen(port,() => {
     console.log(`Server is running on port: ${port}`);
});
