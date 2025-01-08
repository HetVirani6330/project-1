const Booking = require('../models/booking');

const getMyBookings =async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id })
        .populate('flight')
        .populate('hotel');
    res.status(200).json(bookings);
};

const createBooking = async (req, res) => {
    const { flight, hotel, checkIn, checkOut, totalPrice } = req.body;

    const booking = await Booking.create({
        user: req.user.id,
        flight,
        hotel,
        checkIn,
        checkOut,
        totalPrice,
        status: 'confirmed'
    });

    res.status(201).json(booking);
};

module.exports = {
    getMyBookings,
    createBooking
};