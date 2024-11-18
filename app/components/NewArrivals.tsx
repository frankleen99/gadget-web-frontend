"use client";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const phoneData = [
  {
    id: 1,
    name: "Apple Airpods Max",
    price: "N800,000",
    image: "../images/airpodsmax.webp"
  },
  {
    id: 2,
    name: "JBL Pulse 4",
    price: "N200,000",
    image: "../images/jblpulse4.jpg"
  },
  {
    id: 3,
    name: "Airpods Pro 2nd Gen",
    price: "N370,000",
    image:
      "../images/airpodspro2.webp",
  },
];
const NewArrivals = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 text-left md:text-center lg:text-center xl:text-center">
        CHECK OUT NEW PRODUCTS
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {phoneData.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white group rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg cursor-pointer border p-2 md:p-4 space-y-2 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 rounded-lg sm:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg sm:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-lg sm:w-[300vw] sm:h-[25vh] lg:w-[30wv] lg:h-[35vh] object-cover"
                />
              </div>
              <h2 className="text-md md:text-lg font-bold">{item.name}</h2>
              <p className="text-sm md:text-lg font-semibold">{item.price}</p>
            </div>
        ))}
      </div>
      <div className="flex justify-end mr-4 md:justify-end mt-5">
        <Link
          href="/New"
          className="flex  items-center cursor-pointer hover:text-blue-400"
        >
          See More <FaLongArrowAltRight className="ml-1 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
