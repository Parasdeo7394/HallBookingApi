const express = require("express");




const {helloWorld,
  getAllRooms,
  addRoom,
  getRoomById,
  updateRoom,
  deleteRoomById,
  deleteAllRooms
} = require("../controllers/rooms.controllers")

const router = express.Router();

router.get("/", helloWorld);

router.get("/rooms", getAllRooms);

router.post("/rooms", addRoom);

router.get("/rooms/:roomId", getRoomById);

router.put("/rooms/:roomId", updateRoom);

router.delete("/rooms/:roomId", deleteRoomById);

router.delete("/rooms", deleteAllRooms);

module.exports = router;