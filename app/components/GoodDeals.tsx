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
    <div className="bg-gray-100 p-4 md:p-8">
      <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-5 text-left md:text-center lg:text-center">
        CHECK OUT AVAILABLE GOOD DEALS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {phoneData.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white group cursor-pointer rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg border p-3 space-y-1 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 rounded-lg sm:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg sm:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full sm:w-[300vw] sm:h-[25vh] lg:w-[30wv] rounded-lg lg:h-[35vh] object-cover"
                />
              </div>
              <h2 className="text-md md:text-lg font-semibold">{item.name}</h2>
              <p className="text-sm md:text-lg font-semibold">{item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GoodDeals;
