"use client";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./SearchBar";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-16 px-4 sm:px-6 p-10 lg:px-10 bg-white shadow-md relative">
      <div className="flex items-center justify-between h-full">
        {/* Hamburger Button (Visible only on mobile screens) */}
        <div className="lg:hidden">
          <FaBars
            className="cursor-pointer text-black"
            size={25}
            onClick={toggleMenu}
          />
        </div>

        {/* Logo */}
        <Link href="/" className="ml-[90px] sm:ml-[150px] md:ml-[170px] lg:ml-0 xl:ml-0 justify-center">
          <Image
            className="w-[50px] sm:w-[70px] lg:w-[85px]"
            src="/images/Gadgetlogo.png"
            alt="Gadget Web logo"
            height={40}
            width={40}
            priority
          />
        </Link>

        {/* Search Bar (Visible on all screens) */}
        <div>
          <Searchbar />
        </div>
        
        {/* Icons (Cart & Profile - Visible on all screens) */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaShoppingCart className="cursor-pointer h-[23px] w-[23px] sm:h-[30px] sm:w-[30px] text-black" size={25} />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#F35C7A] text-white text-xs rounded-full flex justify-center items-center">
              0
            </span>
          </div>
          <IoMdContact className="cursor-pointer h-[23px] w-[23px] sm:h-[30px] sm:w-[30px] text-black" size={28} />
        </div>
      </div>

      {/* for dark overlay */}
      {isOpen && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {/* Mobile Menu (Appears when hamburger button is clicked) */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-[60%] h-full bg-white z-10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-4">
            {/* logo for hamburger */}
            <Link href="/" className="flex items-center">
              <Image
                className="w-[50px] sm:w-[70px] lg:w-[65px]"
                src="/images/Gadgetlogo.png"
                alt="Gadget Web logo"
                height={40}
                width={40}
                priority
              />
            </Link>

            <AiOutlineClose
              className="cursor-pointer"
              size={25}
              onClick={toggleMenu}
            />
          </div>
          <nav className="flex flex-col mt-10 space-y-4 px-4">
            <Link href="/" onClick={toggleMenu} className="sm:text-[22px]">
              Home
            </Link>
            <Link
              href="/phonesAndTablet"
              onClick={toggleMenu}
              className="sm:text-[22px]"
            >
              Smartphones
            </Link>
            <Link href="/computers" onClick={toggleMenu} className="sm:text-[22px]">
              Laptops
            </Link>
            <Link href="/games" onClick={toggleMenu} className="sm:text-[22px]">
              Gaming
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="sm:text-[22px]">
              Contact
            </Link>
          </nav>
          <div className="mt-[50px] sm:mt-[70px] flex justify-center  space-x-16">
            <button className="bg-black text-white pt-3 pb-3 pr-8 pl-8 text-[10px] sm:pt-5 sm:pb-5 sm:pl-10 sm:pr-10 rounded-lg sm:text-[18px] hover:bg-slate-900 transition ease-in-out"><Link href="/login">Login</Link></button>
            <button className="bg-black text-white pt-3 pb-3 pr-8 pl-8 text-[10px] sm:pt-5 sm:pb-5 sm:pl-10 sm:pr-10 rounded-lg sm:text-[18px] hover:bg-slate-900 transition ease-in-out"><Link href="/signup">Sign Up</Link></button>
          </div>
        </div>
      )}
       {/* DESKTOP menu */}
       <nav className="hidden lg:block">
        <div className="flex justify-center">
          {/* Desktop navlinks */}
          <ul className="flex space-x-10 text-lg font-medium">
            <li className="text-[#909090] text-2xl hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#909090] text-2xl hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/phonesAndTablet">Smartphones</Link>
            </li>
            <li className="text-[#909090] text-2xl hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/computers">Laptops</Link>
            </li>
            <li className="text-[#909090] text-2xl hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/games">Gaming</Link>
            </li>
            <li className="text-[#909090] text-2xl hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
