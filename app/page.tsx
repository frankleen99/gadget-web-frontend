"use client";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Geist } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["cyrillic-ext"],
  weight: "700",
});
const geist = Geist({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const slides = [
    {
      id: 1,
      category: "Smartwatch",
      name: "applewatch series 5",
      image: "/images/applewatch.jpg",
    },
    {
      id: 2,
      category: "Headphones",
      name: "Sony WH-1000XM5",
      image: "/images/airpods.jpg",
    },
    {
      id: 3,
      category: "Speakers",
      name: "Jbl charge 5",
      image: "/images/redflip6.jpg",
    },
  ];

  const gridData = [
    {
      id: 1,
      category: "Tablet and Smartphones",
      image: "/images/iphones.jpg",
      link: "/phonesAndTablet",
    },
    {
      id: 2,
      category: "Computers",
      image: "/images/macbook.jpeg",
      link: "/computers",
    },
    {
      id: 3,
      category: "Accessories",
      image: "/images/accessories.jpg",
      link: "/accessories",
    },
    {
      id: 4,
      category: "Games and Consoles",
      image: "/images/gameController.jpeg",
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
      link: "/networkAndRouters",
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
      image: "/images/surface5.jpg",
    },
    {
      id: 2,
      name: "Surface 3",
      image: "/images/microsoftSurface1.jpg",
    },
    {
      id: 3,
      name: "Surface 4",
      image: "/images/microsoftSurface4.jpg",
    },
  ];

  const phoneData = [
    {
      id: 1,
      name: "Brand new(NO BOX) Non-active Iphone 15 pro max 256gb",
      price: "N1,650,000",
      image: "/images/15promax.webp",
      link: "/goodDeals/15promax",
    },
    {
      id: 2,
      name: "Brand new(NO BOX) Non-active Samsung s24 ultra 256gb",
      price: "N1,550,000",
      image: "/images/s23Ultra.jpg",
      link: "/goodDeals/s24ultra",
    },
    {
      id: 3,
      name: "Open box ipad pro M1 chip 12.9 inches 256gb wifi-cellular",
      price: "N1,300,000",
      image: "/images/ipadProM1.jpg",
      link: "/goodDeals/ipadprom1",
    },
    {
      id: 4,
      name: "Fully functional Samsung fold 6 512gb DUal sim",
      price: "N2,000,000",
      image: "/images/zFold6.jpg",
      link: "/goodDeals/fold6",
    },
  ];

  const arrivalsData = [
    {
      id: 1,
      name: "Brand new Non-active Apple Airpods Max",
      price: "N800,000",
      image: "/images/airpodsMax.jpg",
      link: "/new/airpodsmax",
    },
    {
      id: 2,
      name: "Brand new JBL Pulse 4",
      price: "N200,000",
      image: "/images/jblpulse4.jpg",
      link: "/new/jblpulse4",
    },
    {
      id: 3,
      name: "Brand new Non-active Airpods Pro 2nd Gen",
      price: "N370,000",
      image: "/images/airpodspro2.webp",
      link: "/new/airpodspro2",
    },
    {
      id: 4,
      name: "Brand new Non-active Samsung fold 6 512gb DUal sim",
      price: "N2,400,000",
      image: "/images/Fold6.jpg",
      link: "/goodDeals/fold6",
    },
  ];

  //   const [current, setCurrent] = useState(0);
  //   const totalSlides = slides.length;

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  //     }, 4000);

  //     return () => clearInterval(interval);
  //   }, [totalSlides]);

  return (
    <div className="max-w-full 2xl:max-w-[1800px] mx-auto ">
      {/* Navbar and Search Bar */}
      <Navbar />
      <SearchBar />

      {/* Slider */}
      <div className="bg-cover bg-center mt-3 max-w-full 2xl:max-w-[1800px] mx-auto relative">
        <div className="overflow-hidden relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                {/* Slide Content */}
                <div className="w-full h-full relative ">
                  {/* Background Image */}
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    className="w-screen h-[50vh] object-cover"
                    width={500}
                    height={500}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />

                  {/* Hero Content */}
                  <div className="absolute inset-0 flex items-center px-5 mt-5 sm:px-10 lg:px-20">
                    <div className="text-white space-y-4 max-w-xl">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Upgrade Your Tech Today
                      </h1>
                      <p className="text-base sm:text-lg text-gray-200">
                        Discover gadgets that power your lifestyle — from phones
                        to accessories.
                      </p>

                      {/* CTA + Promo Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <Link href="/goodDeals">
                          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                            Shop Now
                          </button>
                        </Link>
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                          🔥 Summer Sale - Up to 50% Off!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-gray-100 p-5">
        {/* Title */}
        <h2
          className={`text-[30px] md:text-[34px] lg:text-[34px] mb-3 ${plusJakarta.className}`}
        >
          PRODUCT CATEGORIES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3">
          {gridData.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="bg-white group cursor-pointer rounded-lg border p-2 lg:p-2 xl:p-3 hover:shadow-lg transition-shadow duration-500 flex flex-col h-full">
                {/* Image Container with Overlay */}
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  {/* Overlay */}
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-300 z-10" />

                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.category}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Category Name */}
                <h3
                  className={`text-md lg:text-xl xl:text-2xl text-center mt-4 flex-grow flex items-center justify-center ${geist.className}`}
                >
                  {item.category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Surface Section */}
      <Link href="/computers">
        <div className="bg-cover bg-center w-full h-full">
          <div className="overflow-hidden relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              {surfaceLaptop.map((slide) => (
                <SwiperSlide key={slide.id}>
                  {/* Image container */}
                  <div className="mt-3 relative flex w-full h-[35vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[55vh]">
                    <Image
                      src={slide.image}
                      alt="product"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />

                    {/* Centered text */}
                    <div className="absolute inset-0 flex justify-center items-center text-white">
                      <p
                        className={`text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-white text-center px-4 ${plusJakarta.className}`}
                      >
                        Introducing Surface Laptops
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Link>

      {/* Good Deals */}
      <Link href={"/goodDeals"}>
        <div className="bg-gray-100 p-3 sm:p-6 lg:p-8">
          <h2
            className={`text-[20px] md:text-[34px] lg:text-[34px] mb-4 ${plusJakarta.className}`}
          >
            CHECK OUT AVAILABLE GOOD DEALS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {phoneData.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white group cursor-pointer rounded-lg border p-2 lg:p-3 xl:p-3 space-y-2 hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-300 z-10" />
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>
                <h2
                  className={`text-lg sm:text-xl lg:text-xl text-center ${plusJakarta.className}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-lg sm:text-xl lg:text-xl text-center ${geist.className}`}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <Link
              href="/goodDeals"
              className="flex items-center text-blue-600 hover:text-blue-400 transition-colors"
            >
              See More <FaLongArrowAltRight className="ml-1 mt-0.5" />
            </Link>
          </div>
        </div>
      </Link>

      {/* New Arrivals */}
      <Link href={"/new"}>
        <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
          <h2
            className={`text-[25px] md:text-[34px] lg:text-[35px] mb-3 ${plusJakarta.className}`}
          >
            CHECK OUT NEW PRODUCTS
          </h2>

          {/* Scrollable on Small & Medium, Grid on Large+ */}
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 sm:gap-6 md:gap-4 lg:grid lg:grid-cols-4 lg:overflow-visible pb-4">
            {arrivalsData.map((item, index) => (
              <div
                key={item.id || index}
                className="min-w-[200px] sm:min-w-[250px] md:min-w-[270px] lg:min-w-0 bg-white group rounded-lg border p-2 lg:p-3 xl:p-3 space-y-1 hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute inset-0 group-hover:bg-black/30 transition duration-300 z-10" />

                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>
                <h2
                  className={`text-lg sm:text-xl text-center ${plusJakarta.className}`}
                >
                  {item.name}
                </h2>
                <p
                  className={`text-lg lg:text-xl text-center ${geist.className}`}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* See More Link */}
          <div className="flex justify-end mt-6">
            <Link
              href="/new"
              className="flex items-center text-blue-600 hover:text-blue-400 transition-colors"
            >
              See More <FaLongArrowAltRight className="ml-1 mt-0.5" />
            </Link>
          </div>
        </div>
      </Link>
      <Footer />
    </div>
  );
};

export default Page;
