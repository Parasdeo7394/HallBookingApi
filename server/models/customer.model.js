const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    
    unique: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  roomId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  startTime: {
    type: String,
    trim: true,
  },
  endTime: {
    type: String,
    trim: true,
  },
  roomName: {
    type: String,
    
    trim: true,
  },
 

 
});

module.exports = mongoose.model("Users", customerSchema);