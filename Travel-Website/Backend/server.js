const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user"); // ✅ Ensure correct path

const router = express.Router(); // ✅ Define router

// Register User
router.post("/register", async (req, res) => {
    try {
        console.log("🔹 Request Received:", req.body);

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log("❌ Missing Fields");
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("❌ User Already Exists");
            return res.status(400).json({ message: "User already exists" });
        }

        console.log("🔹 Hashing Password...");
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("🔹 Creating New User...");
        const user = new User({ name, email, password: hashedPassword });

        console.log("🔹 Saving to Database...");
        await user.save();

        console.log("✅ User Registered Successfully!");
        res.status(201).json({ message: "User Registered Successfully" });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// ✅ Export the router
module.exports = router;
