const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
// const cookieParser = require('cookie-parser')
dotenv.config()
const port = process.env.PORT || 5000
const hotelRoute = require('./routes/hotels');
const authRoute = require('./routes/users');
const roomRoute = require('./routes/rooms');
const reviewRoute = require('./routes/review');
const articleRoute = require('./routes/articles');
const orderRoute = require('./routes/order');


const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vatpd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
// console.log(mongoUrl)

mongoose.connect(mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(()=>{console.log('database connected successfully')})
.catch(err =>{console.log(err)})

// API
// app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use('/hotel', hotelRoute)
app.use('/auth', authRoute)
app.use('/room', roomRoute)
app.use('/review', reviewRoute)
app.use('/article', articleRoute)
app.use('/order', orderRoute)
app.use((err, req, res, next) =>{
  const errStatus = err.status || 500
  const errMsg = err.message || 'something went wrong'
  return res.status(errStatus).json({errMsg})
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})