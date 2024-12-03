"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const page = () => {
  const slides = [
    {
      id: 1,
      category: "Smartwatch",
      name: "applewatch series 5",
      image: "../images/applewatch.jpg",
    },
    {
      id: 2,
      category: "Headphones",
      name: "Sony WH-1000XM5",
      image: "../images/airpods.jpg",
    },
    {
      id: 3,
      category: "Speakers",
      name: "Jbl charge 5",
      image: "../images/jbl.jpg",
    },
  ];

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

  const phoneData = [
    {
      id: 1,
      name: "Brand new(No BOX) Non-active Iphone 15 pro max 256gb",
      price: "N1,650,000",
      image: "../images/15promax.webp",
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

  const arrivalsData = [
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
    <div>
      {/* Slider */}
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
                <div className="mt-48 h-full w-full lg:mt-28 xl:mt-28 relative flex lg:h-[50vh] xl:h-[50vh] 2xl:h-[50vh]">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SLIDER ENDS */}

      {/*SECTION 2 GRIDS  */}
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
      {/* SECTION 2 ENDS */}

      {/* SECTION 3 SURFACE */}
      <Link href="/surface">
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
      </Link>
      {/* SECTION 3 SURFACE ENDS */}

      {/* SECTION 4 GOOD DEALS */}
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
      {/* SECTION 4 GOOD DEALS END */}

      {/* SECTION 5 NEW ARRIVALS */}
      <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          CHECK OUT NEW PRODUCTS
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {arrivalsData.map((item, index) => (
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
      {/* SECTION 5 NEW ARRIVALS END */}
    </div>
  );
};

export default page;
