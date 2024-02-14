// routes.js

const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const patientController = require('../controllers/patientController');
const doctorController = require('../controllers/doctorController');
const clinicController = require('../controllers/clinicController');

router.post('/appointments/book', appointmentController.bookAppointment);
router.get('/appointments/available-doctors', appointmentController.getAvailableDoctors);

router.get('/patients', patientController.getAllPatients);
router.post('/patients', patientController.createPatient);
router.get('/patients/:id', patientController.getPatientById);

router.get('/doctors', doctorController.getAllDoctors);
// router.post('/doctors', doctorController.createDoctor);
router.get('/doctors/:id', doctorController.getDoctorById);

router.get('/clinics', clinicController.getAllClinics);
// router.post('/clinics', clinicController.createClinic);
router.get('/clinics/:id', clinicController.getClinicById);

module.exports = router;
