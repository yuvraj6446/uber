const express=require('express');
const dotenv=require('dotenv');
const app=express();
dotenv.config();

const cors=require('cors');
app.use(cors());



app.get('/',(req,res)=>{
    res.send('Hello World');
});

module.exports=app;