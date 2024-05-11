// models/schedule.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  Schedule_ID: { type: String, required: true, unique: true },
  Course_ID: { type: String, required: true },
  Class_Date: { type: Date, required: true },
  Start_Time: { type: String, required: true },
  End_Time: { type: String, required: true }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
