const router = require('express').Router();
const Room = require('../models/Room');
const Hotel = require('../models/Hotels')
const { verifyAdmin } = require('../utils/Verifytoken');
const { createRoom,updateRoom,deleteRoom,getAllRooms,getRoomByID,updateRoomAvail } = require('../controllers/rooms');

// CREATE NEW ROOM
router.post('/createRoom/:hotelId', verifyAdmin, createRoom)

// UPDATE ROOM 
router.put('/updateRoom/:id', verifyAdmin, updateRoom)
// DELETE ROOM
router.delete('/deleteRoom/:id/:hotelId', verifyAdmin, deleteRoom)
// GET ALL ROOM
router.get('/getAllRooms', getAllRooms)
// GET ROOM BY ID
router.get('/getRoomByID/:id', getRoomByID)
// BOOK ROOM WITH EXACT DATE BY ROOM ID Y ID
router.put("/availability/:id", updateRoomAvail)

module.exports = router;