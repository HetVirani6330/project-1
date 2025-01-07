const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');
const mongoose = require("mongoose")
dotenv.config();

// Connect to database

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port,() =>{ 
    mongoose.connect(process.env.MONGO_URI);
    console.log(`Server started on port ${port}`)
});