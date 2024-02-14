import React, { useState,useEffect } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    clinicId: '',
    timeSlot: '',
    patientId: '65cd01632a97c9036a7a5526'
  });
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/doctors');
        // console.log("res",res)
        setDoctors(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchClinics = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/clinics');
        setClinics(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctors();
    fetchClinics();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/appointments/book', formData);
    //   console.log(res.data);
    if(res.data){
        alert(`Your Booking Appoinment`)

    }
    } catch (err) {
      console.error(err);
    }
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctorId">Select Doctor:</label>
          <select id="doctorId" name="doctorId" value={formData.doctorId} onChange={handleChange}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="clinicId">Select Clinic:</label>
          <select id="clinicId" name="clinicId" value={formData.clinicId} onChange={handleChange}>
            <option value="">Select Clinic</option>
            {clinics.map((clinic) => (
              <option key={clinic._id} value={clinic._id}>{clinic.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeSlot">Select Time Slot:</label>
          <input type="datetime-local" id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleChange} />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
