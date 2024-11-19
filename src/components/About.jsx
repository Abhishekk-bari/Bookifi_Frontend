import React from 'react';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import about4 from '../assets/about-4.jpg'

function About() {
  return (
    <div className="">
    <div className="grid grid-cols-2 gap-4 p-8 md:grid-cols-4 md:grid-rows-2 ">
      {/* Left Green Card: Spans 2 rows */}
      <div className="col-span-2 md:col-span-2 md:row-span-2 flex flex-col items-center justify-center text-black rounded-lg shadow-md">
        <img
          src={about2}
          alt="Cactus"
          className="w-full h-full object-cover" // Adjust image size to fit the div
        />
        <h2 className="mt-2 text-2xl font-bold text-center">
          What you will <br /> get from my books?
        </h2>
      </div>

      {/* Top Right: Influencers */}
      <div className="col-span-2 items-center justify-center bg-transparent shadow-md">
        <img
          src={about4} // Replace with the cactus image URL
          alt="Cactus"
          className="w-full h-auto max-h-full rounded-xl object-cover" // Adjust image size to fit the div
        />
        
      </div>

      {/* Middle Right: Income Streams */}
      <div className="bg-transparent flex col-span-2 items-center justify-center rounded-lg shadow-md">
        <img 
          src={about3} // Replace with the cactus image URL
          alt="Cactus"
          className="w-full h-full object-cover rounded-xl" // Adjust image size to fit the div
        />
      </div>

    
    </div>
  </div>
);
}

export default About;
