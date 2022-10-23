const mongoose = require('mongoose');
const { Schema } = mongoose;

const ElementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  email: {
    type: String
  },
  role: {
    type: String,
    default: 'General'
  },
  contactNum: {
    type: String
  },
  description: {
    type: String,
    required: true,
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

module.exports = mongoose.model('element', ElementSchema);