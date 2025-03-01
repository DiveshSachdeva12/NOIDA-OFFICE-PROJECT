require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/authRoutes"); 

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes); 


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((error) => console.error("❌ MongoDB Connection Error:", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
