const Hotel = require('../models/hotel');


const getHotels = async (req, res) => {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
};

const createHotel = async (req, res) => {
    const { name, location, pricePerNight, roomsAvailable, amenities, rating } = req.body;

    const hotel = await Hotel.create({
        name,
        location,
        pricePerNight,
        roomsAvailable,
        amenities,
        rating
    });

    res.status(201).json(hotel);
};

module.exports = {
    getHotels,
    createHotel
};
