// models/grade.js
const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  Grade_ID: { type: String, required: true, unique: true },
  Enrollment_ID: { type: String, required: true },
  Grade: { type: Number, required: true },
  Classification: { type: String, required: true },
  Note: { type: String }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
