const express = require('express')

const User = require('../schemas/user')
const Photo = require('../schemas/photo')
const Location = require('../schemas/location')
const bcrypt = require('bcrypt')
const router = express.Router()
const mongoose = require('mongoose');

router.get("/view/:id", async (req,res) => {
    const _id = mongoose.Types.ObjectId(req.params.id);
    let selectedPhoto = await Photo.findOne(_id)

    selectedPhoto.view =  selectedPhoto.view+1

    res.status(201)
    res.json({result:1,selectedPhoto})//photo 조인시킨 거


    await selectedPhoto.save()
})
router.get('/location/:id',async (req,res) => {
    const locationId = mongoose.Types.ObjectId(req.params._id);//locationId받아옴
    const photos = await Photo.find({locationId})
    if(photos.length > 0){//0이상이면
        
        res.json({result:1,photos})//photo 조인시킨 거

    }else{
        res.status(200);
        res.json({result:0})
    }
})
router.get('/best/:_id',async (req,res)=>{ //locationId값입력하면

    const locationId = mongoose.Types.ObjectId(req.params._id);//locationId받아옴

    // const location = await Location.find({locationId})
    // //photo에  Photo컬렉션에서 ObjectID.userId값을 찾아서 photo랑user테이블 조인시킨다

    const photos = await Photo.find({locationId}).sort('view')

    console.log(photos)
    if(photos.length > 0){//0이상이면
        let photo = photos[photos.length-1]
        res.json({result:1,photo})//photo 조인시킨 거

    }else{
        res.status(200);
        res.json({result:0})
    }


});

module.exports = router

/*

router.post('/',async (req,res)=>{
    const { userId } = req.body

    const user = await User.findOne({userId})
    console.log(req.body)

    if(user){

        const id = photo.userId
        const success = await bcrypt.compare(userId,id)

    if( success) {
        //User.findOne({ name: 'zero' }).populate('bestFriend').exec((err, data) => {
        //    console.log(data);
        res.json({result:1})
    }else{
       res.json({result:0})
    }
}else{

    // 등록되지 않은 유저
    res.json({result:-1})
}


})


router.get('/mylist/:userId',async (req,res)=>{

    const userId = req.params.userId;

    const photo = mongoose.Types.ObjectId(userId.toString());

    const user = await Chat.find({photo}).populate('photo').populate('user').sort('createAt');


    console.log(user);

    if(user.length > 0){

        res.json({result:1})

    }else{
        res.status(404);
        res.json({result:0})
    }


});




//'/chat/img'
router.post('/img',imgUploader.single('img'),async (req,res)=>{
    const {user_id} = req.body;
    const imgUrl = req.file.path;
    console.log(req.file.path);


    try {
        const photo = new Photo({
            user_id:user_id,
            view:0,
            imgPath:imgUrl
        });

        await photo.save();

        res.status(201);
        res.json({result:300})

    }catch (e) {
        res.status(200);
        res.json({result: resultCode.CHAT.CREATE.FAILURE})
    }


});

*/