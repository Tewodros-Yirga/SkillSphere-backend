const mongoose = require("mongoose");

// Define the Enrollment schema
const enrollmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Course model
      ref: "Course",
      required: true,
    },
    enrolledAt: {
      type: Date,
      default: Date.now,
    },
    progress: {
      type: Number,
      default: 0, // Progress percentage (0 to 100)
    },
  },
  { timestamps: true }
);

// Create 
// the Enrollment model
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

// Export the Enrollment model
module.exports = Enrollment;