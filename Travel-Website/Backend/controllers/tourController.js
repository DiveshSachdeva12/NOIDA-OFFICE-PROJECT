const Tour = require('../models/Tour');

exports.getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(201).json(newTour);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
