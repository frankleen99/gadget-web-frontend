"use client";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./SearchBar";
import {
  FaBars,
  FaGamepad,
  FaHome,
  FaLaptop,
  FaShoppingCart,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FcMultipleSmartphones } from "react-icons/fc";
import { IoIosContacts, IoMdContact } from "react-icons/io";
import { useState } from "react";
import CartModal from "./CartModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-15 lg:h-12 px-4 sm:px-5 md:px-5 lg:px-10 xl:px-15 2xl:px-64 mt-7 relative">
      <div className="flex items-center justify-between">
        {/* MOBILE Menu */}
        <nav className="block lg:hidden text-black">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Centered Search Bar (for mobile) */}
              <Searchbar />

              {/* Mobile view hamburger Menu Icon */}
              <div>
                <FaBars
                  className="cursor-pointer"
                  size={30}
                  onClick={toggleMenu}
                />
              </div>

              {/* Centered Logo for mobile */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <Link href="/">
                  <Image
                    src="/images/Gadgetlogo.png"
                    alt="Gadget Web logo"
                    height={80}
                    width={80}
                    priority // Ensures the logo loads quickly
                  />
                </Link>
              </div>

              {/* Shopping icons */}
              <div className="absolute flex top-2 right-2 gap-3">
                <div className="relative flex items-center">
                  <FaShoppingCart className="cursor-pointer" size={25} />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#F35C7A] rounded-full text-white text-sm flex justify-center">
                    0
                  </div>
                  {isCartOpen && <CartModal />}
                </div>
                <div className="flex items-center">
                  <IoMdContact className="cursor-pointer" size={28} />
                </div>
              </div>
            </div>
          </div>

          {/* for dark overlay */}
          {isOpen && (
            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <AiOutlineClose
              onClick={toggleMenu}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />

            {/* Side menu */}
            <nav className="mt-20">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-red-500">
                    <FaHome className="mr-3" />
                    Home
                  </div>
                </Link>
                <Link href="/phonesAndTablets">
                  <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200">
                    <FcMultipleSmartphones className="mr-3" />
                    Smartphones
                  </div>
                </Link>
                <Link href="/computers">
                  <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200">
                    <FaLaptop className="mr-3" />
                    Laptops
                  </div>
                </Link>
                <Link href="/games">
                  <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200">
                    <FaGamepad className="mr-3" />
                    Gaming
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200">
                    <IoIosContacts className="mr-3" />
                    Contact
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </nav>
      </div>

      {/* DESKTOP menu */}
      <nav className="hidden lg:block">
        <div className="flex justify-between items-center">
          {/* Desktop logo */}
          <Link href="/">
            <Image
              src="/images/Gadgetlogo.png"
              alt="Gadget Web logo"
              height={80}
              width={80}
              priority // Ensures the logo loads quickly
            />
          </Link>

          {/* Desktop navlinks */}
          <ul className="flex space-x-10 text-lg font-medium">
            <li className="text-[#909090] hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#909090] hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/phonesAndTablet">Smartphones</Link>
            </li>
            <li className="text-[#909090] hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/computers">Laptops</Link>
            </li>
            <li className="text-[#909090] hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/games">Gaming</Link>
            </li>
            <li className="text-[#909090] hover:text-black hover:border-b-2 hover:border-red-600 transition duration-200">
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-5">
            <div className="relative">
              <FaShoppingCart className="cursor-pointer" size={25} />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#F35C7A] rounded-full text-white text-sm flex justify-center">
                0
              </div>
              {isCartOpen && <CartModal />}
            </div>
            <IoMdContact className="cursor-pointer" size={28} />
          </div>
        </div>

        {/* Centered Search Bar */}
        <div className="mt-5">
          <Searchbar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
