const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().populate('userId tourId');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Create a booking
router.post('/', async (req, res) => {
    try {
        const { userId, tourId, date } = req.body;
        const newBooking = new Booking({ userId, tourId, date });
        await newBooking.save();
        res.json(newBooking);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
