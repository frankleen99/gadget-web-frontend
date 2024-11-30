"use client";
import React from "react";

const phoneData = [
  {
    id: 1,
    name: "Brand new(No BOX) Non-active Iphone 15 pro max 256gb",
    price: "N1,650,000",
    image: "../images/15promax.webp"
  },
  {
    id: 2,
    name: "Brand new(No BOX) Non-active Samsung s24 ultra 256gb",
    price: "N1,550,000",
    image: "../images/s24ultra.jpg",
  },
  {
    id: 3,
    name: "Brand new ipad pro M1 chip 12.9 inches 256gb wifi-cellular",
    price: "N1,300,000",
    image: "../images/ipadprom1.jpg",
  },
  {
    id: 4,
    name: "Brand new Non-active Samsung fold 6 512gb DUal sim",
    price: "N2,400,000",
    image: "../images/fold6.webp",
  },
];

const GoodDeals = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center">
        CHECK OUT AVAILABLE GOOD DEALS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {phoneData.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white group cursor-pointer rounded-lg border p-2 space-y-2 hover:shadow-lg transition-shadow duration-300"
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
            <h2 className="text-md sm:text-lg font-semibold text-center">
              {item.name}
            </h2>
            {/* Product Price */}
            <p className="text-lg sm:text-lg font-medium text-center">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default GoodDeals;
