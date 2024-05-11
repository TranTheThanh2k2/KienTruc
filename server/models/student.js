const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Student_ID: { type: String, required: true, unique: true },
  Full_Name: { type: String, required: true },
  Date_of_Birth: { type: Date, required: true },
  Gender: { type: String, required: true },
  Address: { type: String, required: true },
  Email: { type: String, required: true },
  Phone_Number: { type: String, required: true },
  Department_Code: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Student', studentSchema);
