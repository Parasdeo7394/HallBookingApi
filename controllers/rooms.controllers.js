const Rooms = require("../models/room.model");
const mongoose = require("mongoose");

exports.helloWorld = (req, res) => {
  console.log("USERNAME: ", process.env.USERNAME);
  console.log("PASSWORD: ", process.env.PASSWORD);
  res.send({
    message: "hello world",
  });
};

exports.getAllRooms = (req, res) => {
  try {
    Rooms .find()
      .then((data) => {
        res.status(200).send({
          message: "All Booked customers have been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Users data.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.getRoomById = (req, res) => {
  try {
    const roomId = req.params.roomId;
    Rooms.findOne({ _id: new mongoose.Types.ObjectId(roomId) })
      .then((data) => {
        if (!data) {
          return res.status(200).send({
            message: "No customer found with the given Id",
          });
        }
        res.status(200).send({
          message: `A customer with this Id ${roomId}  has been retrieved successfully`,
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving User data.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.addRoom = (req, res) => {
  try {
    const payload = req.body;

    const newUser = new Rooms(payload);

    newUser
      .save()
      .then((data) => {
        res.status(200).send({
          message: "A room is booked by customer sucessfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while adding a new user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.updateRoom = (req, res) => {
  try {
    const roomId = req.params.roomId;

    const payload = req.body;

    Rooms.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(roomId) },
      { $set: { ...payload } }
    )
      .then((data) => {
        res.status(200).send({
          message: `customer with Id ${roomId} has been updated sucessfully.`,
          roomId: data._id,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while updating an roomId.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteRoomById = (req, res) => {
  try {
    const roomId = req.params.roomId;

    Rooms.deleteOne({ _id: new mongoose.Types.ObjectId(roomId) })
      .then((data) => {
        res.status(200).send({
          message: `one customer with  Id ${roomId} is checking out`,
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting an user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteAllRooms = (req, res) => {
  try {
    Rooms.deleteMany()
      .then((data) => {
        res.status(200).send({
          message: "Rooms are available",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting customerId.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};