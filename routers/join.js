const express = require('express')
const User = require('../schemas/user')
const bcrypt = require('bcrypt')

const router = express.Router();


router.post('/',async (req,res,next)=>{

    const {userId , userName , userPassword ,userGender,userBirth} = req.body
let user = await User.findOne({userId})

    if(user){
        res.status(200)
        res.json({result:0})
    }else{
        const hashPw = await bcrypt.hash(userPassword,12)
        const newUser = new User({
            userId,
            userName,
            userPassword:hashPw,
            userGender,
            userBirth
        })
        await newUser.save(); 
        res.status(201);
        res.json({result:1})

    }
})


module.exports = router

