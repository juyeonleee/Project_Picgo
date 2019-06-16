const express = require('express')
const Location = require('../schemas/location')
const Photo = require('../schemas/photo')
const bcrypt = require('bcrypt')
const router = express.Router()



router.post('/',async (req,res,next)=>{

 
 const {
    address,
    region_1depth_name,
    region_2depth_name,
    region_3depth_name,
    region_4depth_name,
    X,
    Y} = req.body
 
   console.log( address,
    region_1depth_name,
    region_2depth_name,
    region_3depth_name,
    region_4depth_name,
    X,
    Y)
        const newLocation = new Location({
         
            address,
            region_1depth_name,
            region_2depth_name,
            region_3depth_name,
            region_4depth_name,
            X,
            Y
            
        });
        console.log(newLocation)

        await newLocation.save((err,location)=>{
            console.log(location)
                res.status(201);
                res.json({result:1,location:location._id})
           
        })

    
})
module.exports = router
/*router.post('/',imgUploader.single('img'),async (req,res)=>{
   const { userId } = req.body
 
   const { path } = req.file

   console.log(req.file)
   const newPhoto = new Photo({
       userId,
       photoPath:path,
    
   })

   await newPhoto.save()

   res.status(201)
   res.json({ result: "Success"})
})
*/
