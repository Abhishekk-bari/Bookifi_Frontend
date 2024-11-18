import React, { useState } from "react";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function BookingPage() {
  const notify = (message) => toast(message);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: null, // For date selection
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle date changes
  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      appointmentDate: date,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      notify(response.data.message); // Show success toast
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentDate: null,
      }); // Clear the form after submission
    } catch (error) {
      notify(error.response?.data?.error || "An error occurred. Please try again."); // Show error toast
    }
  };

  return (
    <div className="flex flex-row justify-center w-screen h-screen pt-48">
      <div className="text_container pl-10 w-1/2">
        <h1 className="text-8xl pb-10 font-['SummerCharming'] text-blue-500">
          Book
        </h1>
        <p className="font-['CHRISTMASCOMEBACK'] text-6xl pb-2">
          Get a free appointment{" "}
        </p>
        <p className="text-lg">
          Booking your photography session is just a few clicks away!
        </p>
      </div>

      <div className="form_container pr-40 ">
        <form className="border border-gray-500 p-10 rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block mb-4 w-full p-2 border border-black rounded"
            required
          />

          <label className="block mb-2 font-semibold">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block mb-4 w-full p-2 border border-black rounded"
            required
          />

          <label className="block mb-2 font-semibold">Contact Number:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block mb-4 w-full p-2 border border-black rounded"
            required
          />

          <label className="block mb-2 font-semibold">Appointment Date:</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formData.appointmentDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <input
                  {...params}
                  className="block mb-4 w-full p-2 border border-black rounded"
                  required
                />
              )}
            />
          </LocalizationProvider>

          <button
            type="submit"
            className="mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        
        <Toaster />
      </div>
    </div>
  );
}

export default BookingPage;