const mongoose = require('mongoose')
const { Schema } = mongoose;
const {Types : {ObjectId}} = Schema;
const userSchema = new Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true,
    },
     userPassword:{
        type:String,
        required:true,
    },
    userGender:{
        type:String,
        required:true,
    },
    userBirth:{
        type:String,
        required:true,
    },
    profileUrl:{
        type:String,
        required:false,
        default:'ImgUploads/default.png'
    }
})

module.exports = mongoose.model('User',userSchema);
