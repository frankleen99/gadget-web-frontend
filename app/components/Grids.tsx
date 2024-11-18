"use client";
import Link from "next/link";
import React from "react";

const gridData = [
  {
    id: 1,
    category: "Tablet and Smartphones",
    image:
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    category: "Computers",
    image:
      "https://images.pexels.com/photos/5202955/pexels-photo-5202955.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    category: "Accessories",
    image:
      "https://images.pexels.com/photos/7552458/pexels-photo-7552458.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    category: "Games and Consoles",
    image:
      "https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    category: "Speakers and Headphones",
    image:
      "https://www.av.com/blog/wp-content/uploads/2023/10/How-to-connect-JBL-speakers-featured-image.jpg",
  },
  {
    id: 6,
    category: "Routers and Network",
    image:
      "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    category: "Watches",
    image:
      "https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    category: "Televisions",
    image:
      "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldGZsaXglMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
  },
];
const Grids = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl text-left md:text-center lg:text-center font-bold mb-4">
        PRODUCT CATEGORY
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gridData.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white group cursor-pointer rounded-xl border p-2 space-y-3 lg:space-y-10 xl:-space-y-14 2xl:-space-y-20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square rounded-xl sm:rounded-xl lg:rounded-xl bg-gray-100 sm:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full sm:w-[300vw] sm:h-[30vh] lg:w-[30wv] rounded-lg lg:h-[30vh] object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.category}</h3>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Grids;
