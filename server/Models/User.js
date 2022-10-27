const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    password: {
        type: String,
        required: true
    },
    contactNum: {
        type: String,
    },
    description: {
        type: String,
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    resumelink: {
        type: String
    },
    achievements: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);
// User.createIndexes();
module.exports = User