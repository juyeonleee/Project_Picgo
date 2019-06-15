const mongoose = require('mongoose')
const { Schema } = mongoose;
const {Types : {ObjectId}} = Schema;
//The most simple structure in GeoJSON is a point
const locationSchema = new Schema({

  locationId:
  {type: String,
 
  required: true
  },

  geometry:{
    'type':{type:String,'default':"Point"},
    coordinates:[{type:"Number"}]
  },
  created_at:{type:Date,index:{unique:false},'default':Date.now},
  updated_at:{type:Date,index:{unique:false},'dafault':Date.now}
  });
  
  module.exports = mongoose.model('Location',locationSchema);