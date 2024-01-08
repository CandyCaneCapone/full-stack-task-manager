const mongoose = require("mongoose");

const timestamps =  {
    createdAt : "createdAt" , 
    updatedAt : "updatedAt"
}

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim : true , 
    maxLength : 100 
  },
  description : {
    type : String , 
    required : true , 
    trim : true , 
    maxLength : 300 
  }, 
  completed : {
    type : Boolean , 
    default : false 
  }, 

} ,{timestamps});

module.exports = mongoose.model("tasks", taskSchema);
