const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: { type: String, required: true },  // ✅ Ensure "title" exists here
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Tour', TourSchema);
    