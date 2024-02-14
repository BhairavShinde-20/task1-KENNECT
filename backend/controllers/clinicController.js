const Clinic = require('../models/Clinic');

// Get all clinics
exports.getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.status(200).json(clinics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new clinic
exports.createClinic = async (req, res) => {
  try {
    const newClinic = new Clinic(req.body);
    await newClinic.save();
    res.status(201).json(newClinic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get clinic by id
exports.getClinicById = async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id);
    if (!clinic) {
      return res.status(404).json({ message: 'Clinic not found' });
    }
    res.status(200).json(clinic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
