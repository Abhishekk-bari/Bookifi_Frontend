import React from 'react'

function About() {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img src="https://source.unsplash.com/random/800x800?photography=1" alt="Photography 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img src="https://source.unsplash.com/random/800x800?photography=2" alt="Photography 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img src="https://source.unsplash.com/random/800x800?photography=3" alt="Photography 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img src="https://source.unsplash.com/random/800x800?photography=4" alt="Photography 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
    <div>

    </div>
    </div>
  )
}

export default About
