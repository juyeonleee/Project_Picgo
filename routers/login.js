const express = require('express')
const User = require('../schemas/user')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/',async (req,res)=>{
    const { userId , userPassword} = req.body

    const user = await User.findOne({userId})
    console.log(req.body)

    if(user){

        const pw = user.userPassword
        const success = await bcrypt.compare(userPassword,pw)

    if( success) {
        // 로그인 성공
        res.json({user,result:1})
    }else{
        // 비밀번호 불일치
        res.json({result:0})
    }
}else{

    // 등록되지 않은 유저
    res.json({result:-1})
}


})



module.exports = router