import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
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
    appointmentDate: null,
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
      
      const audio = new Audio('/public/emergence-ringtone.mp3'); 
      audio.play();
      
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
    <>
    <div className="text-center text-yellow-300 font-[WorkforceScalePERSONALUSEONLY] text-9xl pt-20">
      <marquee behavior="scroll" direction="left" scrollamount="5" >
        Book Now  Book Now  Book Now Book Now Book Now Book Now Book Now Book Now Book Now 
      </marquee>
    </div>
    <div className="flex flex-row justify-center w-screen h-screen pt-5"> 
    
      <div className="text_container pl-10 w-1/2 ">
        <h1 className="text-8xl font-['SummerCharming'] text-blue-600">
          Book
        </h1>
        <p className="font-['CHRISTMASCOMEBACK'] text-6xl pb-2">
          Get a free appointment{" "}
        </p>
        <p className="text-lg">
          Booking your photography session is just a few clicks away!
        </p>
        <p className="pt-20 ">
        <span className="pr-5">Address:</span>
        Swiss Chalets Headquarters,Alpine Street 123, Zermatt, Switzerland
        </p>
      </div>

      <div className="form_container pr-40">

        <form className="bg-[#f3f3ff] p-10 rounded-lg shadow-lg w-80" onSubmit={handleSubmit}>
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
            className="mt-4 bg-purple-300 text-gray-800 font-bold py-2 px-4 rounded hover:bg-blue-100"
          >
            Submit
          </button>
        </form>
        
        <Toaster />
        
      </div>
    </div>
    
    </>
  );
}

export default BookingPage;