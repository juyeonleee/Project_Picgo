const express = require('express')
const Photo = require('../schemas/photo')
const bcrypt = require('bcrypt')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const mongoose = require('mongoose')

const imgUploader = multer({

    // 디스크 저장 위치옵션 - 서버디스크 , 구글디스크등 선택
    storage : multer.diskStorage({

        //저장할 디렉터리
        destination(req,file,cb){

            cb(null ,'ImgUploads') //cb  - (에러,결과값) - callback

        },

        // 생성할 파일명
        filename(req,file,cb){
            const ext = path.extname(file.originalname);  // 확장자 설정

            cb(null,path.basename(file.originalname,ext)// 확장자 제외 파일명
                +new Date().valueOf() // 현재 시간 - 파일명 중복 방어
                + ext   // 확장자
            )
        },
    }) ,

    limit:{filesize:5 * 1024 * 1024 } // 파일 크기 제한 5MB
});

router.post('/',imgUploader.single('img'), async (req,res)=>{
   const { userId } = req.body
   const { path } = req.file

   const locationId = mongoose.Types.ObjectId('5d05b5b26ddd3612b4e54b2f');
   console.log(req.file)
   const newPhoto = new Photo({
       userId,
       photoPath:path,
       locationId
   })

   await newPhoto.save()

   res.status(201)
   res.json({ result: "Success"})
})

module.exports = router