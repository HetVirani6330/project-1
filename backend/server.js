const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose")
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/user'));
app.use('/api/flights', require('./routes/flight'));
app.use('/api/hotels', require('./routes/hotel'));
app.use('/api/bookings', require('./routes/booking'));


const port = process.env.PORT || 5000;

app.listen(port,() =>{ 
    mongoose.connect(process.env.MONGO_URI);
    console.log(`Server started on port ${port}`)
});