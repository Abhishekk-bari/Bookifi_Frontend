import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings from the backend when the component mounts
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/bookings');
        const data = await response.json();
        setBookings(data); // Store the fetched bookings in state
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      } finally {
        setLoading(false); // Stop loading once the request is complete
      }
    };

    fetchBookings();
  }, []); // Empty array means this runs only once, when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl pt-52 mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Bookings</h2>

      {/* Booking Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Phone</th>
            <th className="border p-2 text-left">Date & Time</th>
            
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="border p-2">{booking.name}</td>
              <td className="border p-2">{booking.email}</td>
              <td className="border p-2">{booking.phone}</td>
              <td className="border p-2">{booking.appointmentDate}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
