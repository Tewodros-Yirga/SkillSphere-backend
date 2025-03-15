const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// Protected route to get the current user's profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    // Find the user by ID (attached to the request object by the auth middleware)
    const user = await User.findById(req.user.id).select("-password"); // Exclude the password field

    // Send the user data
    
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile", error: err.message });
  }
});

module.exports = router;