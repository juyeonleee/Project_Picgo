const express = require('express')

const router = express.Router();


router.get('/:id',(req,res,next)=>{
    const id = req.params.id
    
    console.log('id')
    res.json({안녕:`안녕${id}`})
    next();

})


module.exports = router