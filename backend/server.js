require("dotenv").config();

const express = require("express");

// const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const User = require("./models/User");


// Connect Database
connectDB();





// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running...");
});

// Example API Route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API is working!"
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});