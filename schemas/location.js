const mongoose = require('mongoose')
const { Schema } = mongoose;
const {Types : {ObjectId}} = Schema;
//The most simple structure in GeoJSON is a point
const locationSchema = new Schema({
   address:{
    type:String,
    required: true
   },
   region_1depth_name:{
    type:String,
    required: true
   },
   region_2depth_name:{
    type:String,
    required: true
   },
   region_3depth_name:{
    type:String,
    required: true
   },
   region_4depth_name:{
    type:String,
    required: true
   },
   //LONGTITUTE
   X:
   {
    type:Number,
    required: true
   },
   //LATITUTE
   Y:
   {
    type:Number,
    required: true
   },
  createAt: {
    type: Date,
    default: Date.now()
}
  });
  
  module.exports = mongoose.model('Location',locationSchema);