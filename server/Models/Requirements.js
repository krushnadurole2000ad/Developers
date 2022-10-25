const mongoose = require('mongoose')
const { Schema } = mongoose;
const ReqSchema = new mongoose.Schema({
    postedby:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    Title: {
        type: String,
        required: true
    },
    Technologies: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    deadline:{
        type:String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactNum:{
        type:String,
        required:true
    } 
})
const Require = mongoose.model('Require', ReqSchema);
module.exports = Require;