const router = require('express').Router();
const Review = require('../models/Review');
const { verifyAdmin } = require('../utils/Verifytoken');

// ADD REVIEW
router.post("/addReview", async(req, res, next) => {

    try{
        const review = await new Review({
            username: req.body.username,
            email: req.body.email,
            img: req.body.img,
            text: req.body.text,
        })
        const rSaved = await review.save()
        res.status(200).json(rSaved)
    }catch(e){
        next(e);
        console.log(e)
    }

})

// GET REVIEW
router.get('/getReview', async(req, res, next)=>{
    try{
        const review = await Review.find({})
        res.status(200).json(review)
    } catch (err) {
        next(err);
        console.log(err)
    }
})

//DELETE REVIEW
router.delete('/delete/:id', verifyAdmin, async (req, res, next) => {
    try{
        const review = await Review.findByIdAndDelete(req.params.id)
        res.status(200).json(review)
    } catch(err) {
        next(err)
        console.log(err)
    }
})
module.exports = router;