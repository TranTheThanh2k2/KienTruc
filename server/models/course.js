// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  Course_ID: { type: String, required: true, unique: true },
  Course_Name: { type: String, required: true },
  Credit_Hours: { type: Number, required: true },
  Instructor: { type: String, required: true },
  Classroom: { type: String, required: true },
  Class_Time: { type: String, required: true },
  Department_Code: { type: String, required: true },
  Max_Students: { type: Number, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
