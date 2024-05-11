// models/maxStudentsLimit.js
const mongoose = require('mongoose');

const maxStudentsLimitSchema = new mongoose.Schema({
  Course_ID: { type: String, required: true },
  Semester_ID: { type: String, required: true },
  Maximum_Students_Registered: { type: Number, required: true }
});

const MaxStudentsLimit = mongoose.model('MaxStudentsLimit', maxStudentsLimitSchema);

module.exports = MaxStudentsLimit;
