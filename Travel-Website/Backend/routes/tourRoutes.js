const express = require('express');
const Tour = require('../models/Tour');

const router = express.Router();

// Get all tours
router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json(tours); // ✅ Return status 200
    } catch (error) {
        res.status(500).json({ message: "Error fetching tours", error: error.message });
    }
});

// Add a new tour
router.post('/', async (req, res) => {
    try {
        const tour = new Tour(req.body);
        await tour.save();
        res.status(201).json(tour); // ✅ Return status 201 for created resource
    } catch (error) {
        res.status(400).json({ message: "Error adding tour", error: error.message });
    }
});

module.exports = router;
