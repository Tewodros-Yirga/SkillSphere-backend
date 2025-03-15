const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"], // Restrict roles to these values
      default: "student", // Default role is student
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
  },
  { timestamps: true }
   // Automatically add createdAt and updatedAt fields
);

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;