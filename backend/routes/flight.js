const express = require('express');
const router = express.Router();
const { getFlights, createFlight } = require('../controllers/flight');
const { protect, admin } = require('../config/authMiddleware');

router.get('/', protect, getFlights);
router.post('/', protect, admin, createFlight);

module.exports = router;