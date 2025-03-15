const mongoose = require("mongoose");

// Define the Course schema
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model
      ref: "User",
      required: true,
    },
    lessons: [
      {
        title: String,
        content: String, // Can be a video URL, PDF link, or text
        duration: Number, // Duration in minutes
      },
    ],
    price: {
      type: Number,
      default: 0, // Free by default
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create
//  the Course model
const Course = mongoose.model("Course", courseSchema);

// Export the Course model
module.exports = Course;