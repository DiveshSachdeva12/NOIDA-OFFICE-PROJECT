const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    tourId: mongoose.Schema.Types.ObjectId,
    date: String,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model('Booking', BookingSchema);
