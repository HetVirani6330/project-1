const Flight = require('../models/flight');

const getFlights =async (req, res) => {
    const flights = await Flight.find({});
    res.status(200).json(flights);
};

const createFlight = async (req, res) => {
    const { flightNumber, departure, arrival, price, seats } = req.body;

    const flight = await Flight.create({
        flightNumber,
        departure,
        arrival,
        price,
        seats
    });

    res.status(201).json(flight);
};

module.exports = {
    getFlights,
    createFlight
};