const mongoose = require("mongoose");

exports.db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Hall_Book");
    console.log("DB is connected");
  } catch (error) {
    console.log("Error while connecting DB: ", error);
  }
};

// ENVIRONMENTAL FILE
// .env