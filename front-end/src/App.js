// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import BookAppointment from "./components/BookAppointment";
import AvailableDoctors from "./components/AvailableDoctors";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<App />} /> */}
      <Route exact path="/" element={<BookAppointment />} />
      <Route
        exact
        path="/available-doctors"
        element={
          <AvailableDoctors
            clinicId="clinic_id_here"
            timeSlot="time_slot_here"
          />
        }
      />
    </Routes>
  );
}

export default App;
