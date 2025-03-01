const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // ✅ Ensure correct path

const router = express.Router(); // ✅ Define router

// 🔹 Register User
router.post("/register", async (req, res) => {
    try {
        console.log("🔹 Registration Request Received:", req.body);

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });

        await user.save();
        res.status(201).json({ message: "User Registered Successfully" });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// 🔹 Login User
router.post("/login", async (req, res) => {
    try {
        console.log("🔹 Login Request Received:", req.body);

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token, user });

    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;
