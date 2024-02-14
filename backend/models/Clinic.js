const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
});

module.exports = mongoose.model('Clinic', clinicSchema);
