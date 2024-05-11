// models/department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  Department_Code: { type: String, required: true, unique: true },
  Department_Name: { type: String, required: true }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
