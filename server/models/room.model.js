const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    
    unique: true,
    trim: true,
  },
  customerName: {
    type: String,
    
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
    
  pricePerHour: {
    type: String,
    required: false,
    trim: true,
  },
  amenitiesInRoom: {
    type: String,
    
    trim: true,
  },
  numberOfSeatsAvailable: {
    type: String,
    trim: true,
  },
  bookedStatus: {
    type: String,
    trim: true,
  },
 
});

module.exports = mongoose.model("Products", roomSchema);