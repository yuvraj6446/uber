const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');

module.exports.authUser=async (req,res,next)=>{
    const token=req.cookies.token || req.header('Authorization')?.replace('Bearer ','');
    if(!token)
    {
        return res.status(401).json({message:'unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded.id);

    }
    catch(error)
    {
        return res.status(401).json({message:'Invalid token, authorization denied'});
    }
}