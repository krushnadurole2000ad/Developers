const express=require('express');
const { body, validationResult } = require('express-validator');
const router=express.Router();
const User=require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser=require('../Middleware/fetchuser');

const JWT_SECRET=process.env.JWT_SECRET;

//ROUTE1:create a user using :POST "/api/auth/createuser".No login required
router.post('/signup',[
    body('name','Enter valid username'),
    body('email','Enter valid email'),
    body('password','Length of password must be greater then 5'),
    body('cpassword','Length of password must be greater then 5'),
],async(req,res)=>{

//If there are errors,return Bad request and the errors
   let success=0;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        success=false;
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
    //check whether the user with this email exists already
    let users=await User.findOne({email:req.body.email});
    if(users){
        return res.status(400).json({success,errors:"This email already exits"});
    }
    

    //secure password by using salt and hashing
    const salt=await bcrypt.genSalt(10);
    const secpass=await bcrypt.hash(req.body.password,salt);
    let user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass, 
    });
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authtoken,Sucess:'Registration complete sucessfully'})
}catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured")
}
})



// -----------------------------------------------------------------------------------------------------------------------------
// ROUTE2:Login a user using POST:api/auth/login.No login required.
router.post('/login',[
    body('email','Enter valid email'),
    body('password','password cannot be blank'),
],async(req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }  
    
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({success,error:"Please enter valid crediantals - 1"})
        }

        const comparepassword=await bcrypt.compare(password,user.password);
        if(!comparepassword){
            success=false;
            return res.status(400).json({success,errors:"Please enter valid crediantals-2"});
        }

        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        success=true
        res.json({success,authtoken})
    }catch(error){
        console.error(error.message);
    res.status(500).send("Some error occured")
    }
})


// --------------------------------------------------------------------------------------------------------------------------------
// ROUTE3:Get logged in user detail using POST:api/auth/getuser.Login required
router.get('/veryhelpful',fetchuser,async(req,res)=>{
    try {
     let userid=req.user.id;
     const user=await User.findById(userid).select("-password");
     res.send(user);
     return;
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Somes error occured")
}
});


// router 4 : update the user profile
router.put('/updateprofile',fetchuser,async(req,res)=>{
    try {
        const {name} = req.body;
        const newuser = {};
        if(name){newuser.name=name};
        let user = await User.findById(req.user.id);
        if(!user){
            return res.status(405).send('User Not Found')
        }
        user = await User.findByIdAndUpdate(req.user.id,{$set:newuser},{new:true});
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})

module.exports=router