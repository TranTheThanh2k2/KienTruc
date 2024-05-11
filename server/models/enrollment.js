// models/enrollment.js
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  Enrollment_ID: { type: String, required: true, unique: true },
  Student_ID: { type: String, required: true },
  Course_ID: { type: String, required: true },
  Semester_ID: { type: String, required: true },
  Status: { type: String, required: true }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
