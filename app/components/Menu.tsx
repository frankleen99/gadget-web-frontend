"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FcMultipleSmartphones } from "react-icons/fc";
import { FaLaptop } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import NavIcons from "./NavIcons";
import Searchbar from "./SearchBar";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="text-black">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Centered Search Bar (for desktop) */}
            <Searchbar />
            {/* Mobile view hamburger Menu Icon */}
            <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
              <FaBars
                className="cursor-pointer"
                size={30}
                onClick={toggleMenu}
              />
            </div>

            {/* Shopping icons (aligned to the right) */}
            <NavIcons />
          </div>
        </div>

        {/* for dark overlay */}
        {isOpen ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Mobile Menu */}
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={toggleMenu}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          {/* side menu */}
          <nav className="mt-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <div className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-red-500">
                  <FaHome className="mr-3" />
                  Home
                </div>
              </Link>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200"
              >
                <FcMultipleSmartphones className="mr-3" />
                Smartphones
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200"
              >
                <FaLaptop className="mr-3" />
                Laptops
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200"
              >
                <FaGamepad className="mr-3" />
                Gaming
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-slate-200 duration-200"
              >
                <IoIosContacts className="mr-3" />
                Contact
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
