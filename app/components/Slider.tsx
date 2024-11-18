"use client";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    category: "Smartwatch",
    name: "applewatch series 5",
    image:
      "../images/applewatch.jpg",
  },
  {
    id: 2,
    category: "Headphones",
    name: "Sony WH-1000XM5",
    image:
      "../images/airpods.jpg",
  },
  {
    id: 3,
    category: "Speakers",
    name: "Jbl charge 5",
    image:
      "../images/jbl.jpg",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Get the total number of slides
  const totalSlides = slides.length;

  // Set up the automatic slide change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-cover bg-center w-full h-full">
      <div className="overflow-hidden relative">
        <div
          className="w-max h-50px flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((slide) => (
            <div
              className="w-screen flex justify-center items-center"
              key={slide.id}
            >
              {/* Image container */}
              <div className="mt-44 h-full w-full lg:mt-48 xl:mt-28 relative flex lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh]">
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
