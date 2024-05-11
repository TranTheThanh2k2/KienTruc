// models/semester.js
const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema({
  Semester_ID: { type: String, required: true, unique: true },
  Semester_Name: { type: String, required: true },
  Year: { type: Number, required: true },
  Start_Date: { type: Date, required: true },
  End_Date: { type: Date, required: true }
});

const Semester = mongoose.model('Semester', semesterSchema);

module.exports = Semester;
