const Appointment = require('../models/Appointment.js');
const Doctor = require('../models/Doctor');

exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, patientId, clinicId, timeSlot } = req.body;

    // Check if the appointment time slot is available for the doctor at the clinic
    const isTimeSlotAvailable = await Appointment.findOne({
      doctor: doctorId,
      clinic: clinicId,
      timeSlot: timeSlot
    });

    if (isTimeSlotAvailable) {
      return res.status(400).json({ message: 'Appointment time slot is not available' });
    }

    // Create a new appointment
    const newAppointment = new Appointment({
      doctor: doctorId,
      patient: patientId,
      clinic: clinicId,
      timeSlot: timeSlot
    });

    await newAppointment.save();

    res.status(201).json(newAppointment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getAvailableDoctors = async (req, res) => {
    try {
      const { clinicId, timeSlot } = req.query;
  
      // Find doctors available at the given clinic and time slot
      const availableDoctors = await Doctor.find({
        clinics: clinicId,
        appointments: { $nin: await Appointment.find({ clinic: clinicId, timeSlot: timeSlot }) }
      });
  
      res.status(200).json(availableDoctors);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  