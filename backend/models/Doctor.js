const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  clinics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Clinic' }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
});

module.exports = mongoose.model('Doctor', doctorSchema);
