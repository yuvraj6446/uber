const express=require('express');
const dotenv=require('dotenv');
const app=express();
dotenv.config();
const userRoutes=require('./routes/user.routes')


const cors=require('cors');
const connectDB = require('./db/db');

connectDB();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/users',userRoutes);
module.exports=app;