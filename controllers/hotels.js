const Hotel = require('../models/Hotels');


// ADDING HOTELS
 const createHotels = async(req, res, next) => {
    try {
        const hotel = await Hotel(req.body)
        const savedHotels = await hotel.save()
        res.status(200).json(savedHotels)
    } catch (err) {
        // res.status(500).json('internal server error')
        // console.log(err)
        next(err)
    }
};
// UPDATE HOTELS
 const updateHotels = async(req, res, next) => {
    try {
        const hotels = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            {new: true}

        )
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
};
// DELETE HOTELS
 const deleteHotels = async(req, res, next) => {
    try {
        const hotelsdelete = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(hotelsdelete)
    } catch (err) {
      next(err)
    }
};

// GET HOTELS BY ID
 const getHotelsbyId = async(req, res, next) => {
    try {
        const hotels = await Hotel.findById(req.params.id)
        res.status(200).json(hotels)
    }catch (err) {
        next(err)
    }
};
// GET ALL HOTELS
 const getAllHotels = async(req, res, next) => {
    try {
        const allhotels = await Hotel.find({});
        res.status(200).json(allhotels);
    }catch (err) {
        next(err)
    }
};

module.exports = {
    createHotels,updateHotels,deleteHotels,getHotelsbyId,getAllHotels
}