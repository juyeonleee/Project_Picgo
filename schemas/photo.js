const mongoose = require('mongoose')
const { Schema } = mongoose;
const {Types : {ObjectId}} = Schema;
const photoSchema = new Schema({
    photoPath:{
        type:String,
        
    },
    userId:{
        type: String,
        ref: "User",
        required: true
    },
     locationId:{
        type: String,
        ref: "Location",
        required: true
    },
    view:{
        type:Number,
        required:false,
        default: 0
    },   
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Photo',photoSchema);