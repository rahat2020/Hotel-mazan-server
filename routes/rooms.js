const router = require('express').Router();
const { verifyAdmin } = require('../utils/Verifytoken');
const { createRoom,updateRoom,deleteRoom,getAllRooms,getRoomByID,updateRoomAvail, rooms, deleteBooked } = require('../controllers/rooms');

// CREATE NEW ROOM
router.post('/createRoom/:hotelId', verifyAdmin, createRoom)
// UPDATE ROOM 
router.put('/updateRoom/:id', verifyAdmin, updateRoom)
// DELETE ROOM FROM HOTEL COLLECTION
router.delete('/deleteRoom/:id/:hotelId', verifyAdmin, deleteRoom)
// DELETE ROOM FROM ROOM COLLECTION
router.delete('/delete/:id', verifyAdmin, rooms)
// GET ALL ROOM
router.get('/getAllRooms',verifyAdmin, getAllRooms)
// GET ROOM BY ID
router.get('/getRoomByID/:id', getRoomByID)
// BOOK ROOM WITH EXACT DATE BY ROOM ID Y ID
router.put("/availability/:id", updateRoomAvail)

// DELETE PARTICULAR ROOMS FEILD FROM ROOM COLLECTION   
router.delete("/deleteBooked/:id", verifyAdmin, deleteBooked)


module.exports = router;