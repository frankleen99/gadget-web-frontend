"use client";
import React, { useEffect, useState } from "react";

const surfaceLaptop = [
  {
    id: 1,
    name: "Surface 2",
    image:
      "https://i.gadgets360cdn.com/large/microsoft_surface_2024_1711089102019.jpg",
  },
  {
    id: 2,
    name: "Surface 3",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/211007171916-underscored-surface-laptop-studio-lead-1.jpg?q=w_3014,h_1696,x_0,y_0,c_fill",
  },
  {
    id: 3,
    name: "Surface 4",
    image:
      "https://www.techadvisor.com/wp-content/uploads/2022/06/microsoft_surface_pro_4_review_7.jpg?quality=50&strip=all&w=1024",
  },
];
const Surface = () => {
  const [current, setCurrent] = useState(0);

  // Get the total number of slides
  const totalSlides = surfaceLaptop.length;

  // Set up the automatic slide change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

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
          {surfaceLaptop.map((slide) => (
            <div
              className="w-screen lg:h-[30vh] flex justify-center items-center"
              key={slide.id}
            >
              {/* Image container */}
              <div className="mt-3 relative h-full w-full flex lg:w-[100vw] lg:h-[100vh]">
                <img src={slide.image} alt="" className="object-contain" />
                {/* Centered text */}
                <div className="absolute inset-0 flex justify-center items-center text-white">
                  <p className="text-2xl md:text-4xl lg:text-5xl font-thin text-white text-center px-4">
                    Introducing Surface Laptops
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surface;
