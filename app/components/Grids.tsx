"use client";
import Link from "next/link";
import React from "react";

const gridData = [
  {
    id: 1,
    category: "Tablet and Smartphones",
    image:
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/phonesAndTablet",
  },
  {
    id: 2,
    category: "Computers",
    image:
      "https://images.pexels.com/photos/5202955/pexels-photo-5202955.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    link: "/computers",
  },
  {
    id: 3,
    category: "Accessories",
    image:
      "https://images.pexels.com/photos/7552458/pexels-photo-7552458.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/accessories",
  },
  {
    id: 4,
    category: "Games and Consoles",
    image:
      "https://images.pexels.com/photos/1579240/pexels-photo-1579240.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/games",
  },
  {
    id: 5,
    category: "Speakers and Headphones",
    image:
      "https://www.av.com/blog/wp-content/uploads/2023/10/How-to-connect-JBL-speakers-featured-image.jpg",
    link: "/speakers",
  },
  {
    id: 6,
    category: "Routers and Network",
    image:
      "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/routers",
  },
  {
    id: 7,
    category: "Watches",
    image:
      "https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/watches",
  },
  {
    id: 8,
    category: "Televisions",
    image:
      "https://images.unsplash.com/photo-1643208589889-0735ad7218f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldGZsaXglMjB0dnxlbnwwfHwwfHx8MA%3D%3D",
    link: "/televisions",
  },
];

const Grids = () => {
  return (
    <div className="bg-gray-100 p-5">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-3">
        Product Categories
      </h2>
  
      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gridData.map((item) => (
          <Link href={item.link} key={item.id}>
            <div className="bg-white group cursor-pointer rounded-lg border p-3 hover:shadow-lg transition-shadow duration-300">
              {/* Image Container */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Category Name */}
              <h3 className="text-md font-semibold text-center mt-4">
                {item.category}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );  
};

export default Grids;
