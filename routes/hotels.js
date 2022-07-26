const router = require('express').Router()
const {
    createHotels,updateHotels,deleteHotels,getHotelsbyId,getAllHotels
} = require('../controllers/hotels')
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/Verifytoken');

// ADDING HOTELS
router.post('/add', verifyAdmin, createHotels)
// UPDATE HOTELS
router.put('/updateHotels/:id',verifyAdmin, updateHotels)
// DELETE HOTELS
router.delete('/delete/:id',verifyAdmin, deleteHotels)
// GET ALL HOTELS
router.get('/allhotels',getAllHotels)
// GET HOTELS BY ID
router.get('/gethotel/:id', getHotelsbyId)

module.exports = router;