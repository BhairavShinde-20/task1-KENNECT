// src/components/AvailableDoctors.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableDoctors = ({ clinicId, timeSlot }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchAvailableDoctors = async () => {
    //   try {
    //     const res = await axios.get(`http://localhost:5000/api/appointments/available-doctors?clinicId=${clinicId}&timeSlot=${timeSlot}`);
    //     console.log("res",res)
    //     setDoctors(res.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    };

    fetchAvailableDoctors();
  }, [clinicId, timeSlot]);

  return (
    <div>
      <h2>Available Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableDoctors;
