const express = require('express')
const Location = require('../schemas/location')
const bcrypt = require('bcrypt')
const router = express.Router()



router.post('/',async (req,res,next)=>{

    const {locationId ,longtitute,latitute} = req.body
 
    console.log(location);

        const newLocation = new Location({
            locationId,
            geometry:{type:'point',coordinates:[longtitute,latitute]}
        });
        await newLocation.save(); 
        res.status(201);
        res.json({result:1})

    
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
