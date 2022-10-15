const mongoose=require('mongoose');
const {Schema}=mongoose;

const ElementSchema=new mongoose.Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
      },
      name:{
          type:String,
          required:true
      },
      email:{
        type:mongoose.Schema.email,
        ref:'user'
      },
      role:{
        type:String,
        default:'General'
      },
      contactNum:{
        type:String
      },
      description:{
          type:String,
          required:true,
      },
      github:{
        type:String
      },
      linkedin:{
        type:String
      },
      resumelink:{
        type:String
      },
      achievements:{
        type:String
      },
      date:{
          type:Date,
          default:Date.now
      }
});

module.exports=mongoose.model('element',ElementSchema);