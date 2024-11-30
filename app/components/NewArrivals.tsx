"use client";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const phoneData = [
  {
    id: 1,
    name: "Apple Airpods Max",
    price: "N800,000",
    image: "../images/airpodsmax.webp",
  },
  {
    id: 2,
    name: "JBL Pulse 4",
    price: "N200,000",
    image: "../images/jblpulse4.jpg",
  },
  {
    id: 3,
    name: "Airpods Pro 2nd Gen",
    price: "N370,000",
    image: "../images/airpodspro2.webp",
  },
];

const NewArrivals = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
        CHECK OUT NEW PRODUCTS
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {phoneData.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white group rounded-lg border p-2 space-y-3 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* Product Name */}
            <h2 className="text-md sm:text-lg font-bold text-center">
              {item.name}
            </h2>
            {/* Product Price */}
            <p className="text-lg sm:text-lg font-medium text-center">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      {/* Link to See More */}
      <div className="flex justify-end sm:justify-end lg:justify-end xl:justify-end 2xl:justify-end mt-6">
        <Link
          href="/New"
          className="flex items-center text-blue-600 hover:text-blue-400 transition-colors"
        >
          See More <FaLongArrowAltRight className="ml-1 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
