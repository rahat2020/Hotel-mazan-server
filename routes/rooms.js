const router = require('express').Router();
const Room = require('../models/Room');
const Hotel = require('../models/Hotels')
const { verifyAdmin } = require('../utils/Verifytoken');

// CREATE NEW ROOM
router.post('/createRoom/:hotelId', verifyAdmin, async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }

})

// UPDATE ROOM 
router.put('/updateRoom/:id', verifyAdmin, async (req, res, next) => {
    try {
        const room = await findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        re.status(200).json(room)
    } catch (err) {
        next(err);
    }
})
// DELETE ROOM
router.delete('/deleteRoom/:id/:hotelId', verifyAdmin, async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        const deleteroom = await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (err) {
            next(err);
        }
        res.status(200).json('room has been deleted')
    } catch (err) {
        next(err);
    }
})
// GET ALL ROOM
router.get('/getAllRooms', async (req, res, next) => {
    try {
        const room = await Room.find({})
        res.status(200).json(room)
    } catch (err) {
        next(err);
    }
})

// GET ROOM BY ID
router.get('/getRoomByID/:id', async (req, res, next) => {
    try {
        const getRoomByID = await Room.findById(req.params.id)
        res.status(200).json(getRoomByID)
    } catch (err) {
        next(err);
    }
})

module.exports = router;