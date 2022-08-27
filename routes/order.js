const Order = require('../models/Order');
const { verifyAdmin } = require('../utils/Verifytoken');

const router = require('express').Router();

// CREATE ORDER
router.post('/add', async (req, res, next)=> {
    try{
        const newOrder = await Order(req.body);
        ordersave = await newOrder.save();
        res.status(200).json('order saved successfully')
    }catch(err){
        next(err);
        console.log(err);
    }
})


// GET ORDER
router.get('/get', async (req, res, next) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        console.log(err)
        next(err)
    }
})
// GET ORDER BY ID
router.get('/get/:id', async (req, res, next) => {
    try {
        const orders = await Order.findById(req.params.id)
        res.status(200).json(orders)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

// DELETE ORDER
router.delete('/delete/:id',verifyAdmin, async(req, res, next) =>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('article deleted')
    } catch (err) {
        console.log(err)
        next(err)
    }
})

module.exports = router;