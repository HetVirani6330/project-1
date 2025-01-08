const express = require('express');
const router = express.Router();
const { getMyBookings, createBooking } = require('../controllers/booking');
const { protect } = require('../config/authMiddleware');

router.route('/')
    .get(protect, getMyBookings)
    .post(protect, createBooking);

module.exports = router;