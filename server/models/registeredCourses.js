// models/registeredCourses.js
const mongoose = require('mongoose');

const registeredCoursesSchema = new mongoose.Schema({
  Student_ID: { type: String, required: true },
  Semester_ID: { type: String, required: true },
  Number_of_Courses_Registered: { type: Number, required: true }
});

const RegisteredCourses = mongoose.model('RegisteredCourses', registeredCoursesSchema);

module.exports = RegisteredCourses;
