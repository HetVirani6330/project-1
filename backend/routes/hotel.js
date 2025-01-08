const express = require('express');
const router = express.Router();
const { getHotels, createHotel } = require('../controllers/hotel');
const { protect, admin } = require('../config/authMiddleware');

router.get('/', protect, getHotels);
router.post('/', protect, admin, createHotel);

module.exports = router;