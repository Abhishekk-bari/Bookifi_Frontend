import React, { useRef, useEffect } from "react";
import v_bg from "../assets/v_bg.mp4";
import img1 from "../assets/work2.jpg";
import img2 from "../assets/work3.jpg";
import img3 from "../assets/work4.jpg";
import img4 from "../assets/work5.jpg";

function Home() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    if (slider) {
      // Clone slides for infinite effect
      const slides = Array.from(slider.children);
      slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
      });

      // Start auto-scroll
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          // Reset scroll position to create infinite effect
          slider.scrollLeft = 0;
        }
        slider.scrollBy({ left: 1, behavior: "smooth" }); // Smooth scroll by 1px
      }, 10); // Adjust speed by changing interval time
    }

    return () => {
      clearInterval(scrollInterval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <div>
      {/* Video Section */}
      <div className="grid grid-cols-1 gap-4 p-10 border-2 bg-gray-100 h-screen pt-20">
        <div className="text-center relative overflow-hidden">
          <video
            src={v_bg}
            autoPlay
            loop
            muted
            className="mx-auto rounded-xl w-screen h-[80vh] object-cover"
          />
          <h1 className="pt-80 text-[18vw] font-['SummerCharming'] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 whitespace-nowrap">
            Capture Moments
          </h1>
        </div>
      </div>

      {/* Infinite Slider */}
      <div
        ref={sliderRef}
        className="flex flex-row gap-4 overflow-x-hidden scroll-smooth whitespace-nowrap w-[100vw] h-[30vw] no-scrollbar"
      >
        <div className="bg-gray-100 rounded-xl p-6 flex-shrink-0 min-w-[300px]">
          <img
            src={img1}
            alt="Photography 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex-shrink-0 min-w-[300px]">
          <img
            src={img2}
            alt="Photography 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex-shrink-0 min-w-[300px]">
          <img
            src={img3}
            alt="Photography 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex-shrink-0 min-w-[300px]">
          <img
            src={img4}
            alt="Photography 4"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
