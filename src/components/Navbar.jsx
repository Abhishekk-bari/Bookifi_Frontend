import React from 'react'
import BookingPage from '../pages/BookingPage'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/BookingPage');
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-opacity-20 backdrop-blur-md bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-['MountainHandmade'] text-3xl">PS</span>
            </div>
            <div className="flex items-center">
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                Testimonials
              </a>
              <button 
                className="bg-black text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-700"
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
