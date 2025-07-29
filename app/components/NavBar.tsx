"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/lib/useAuthStore";
import { supabase } from "@/lib/supabaseClient";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const router = useRouter();
  const { userName, isLoggedIn, logout } = useAuthStore();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
    router.push("/login");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const smartphoneDropdownRef = useRef<HTMLDivElement | null>(null);
  const laptopDropdownRef = useRef<HTMLDivElement | null>(null);
  const gamingDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleContactClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsDropdownOpen(false);
    }

    [smartphoneDropdownRef, laptopDropdownRef, gamingDropdownRef].forEach(
      (ref) => {
        if (ref.current && !ref.current.contains(target)) {
          ref.current.style.opacity = "0";
          ref.current.style.visibility = "hidden";
        }
      }
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Mobile dropdown toggles
  const [mobileDropdowns, setMobileDropdowns] = useState({
    smartphone: false,
    laptop: false,
    gaming: false,
  });

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className={`h-16 px-4 sm:px-6 p-10 lg:px-10 bg-white shadow-md relative ${geist.className}`}
    >
      <div className="flex items-center justify-between h-full">
        <Link href="/" className="hidden lg:flex ml-[90px]">
          <Image
            src="/images/Gadgetlogo.png"
            alt="Gadget Web logo"
            height={80}
            width={80}
            priority
          />
        </Link>

        <div className="lg:hidden">
          <FaBars
            className="cursor-pointer text-black"
            size={25}
            onClick={toggleMenu}
          />
        </div>

        <Link href="/" className="ml-[90px] lg:ml-0">
          <Image
            className="hidden sm:w-[70px] lg:w-[85px]"
            src="/images/Gadgetlogo.png"
            alt="Gadget Web logo"
            height={40}
            width={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex justify-center w-full">
          <ul className="flex space-x-10 text-lg font-medium">
            <li className="text-[#909090] text-[20px] relative group">
              <Link href="/" className="hover:text-black">
                Home
              </Link>
              <div className="absolute left-0 -bottom-1 h-[2px] bg-black group-hover:w-full w-0 transition-all duration-300"></div>
            </li>

            {/* Smartphones Dropdown */}
            <li className="text-[#909090] text-[20px] relative group">
              <div className="flex items-center cursor-pointer hover:text-black">
                <Link href="/phonesAndTablet" className="hover:text-black">
                  Smartphones
                </Link>
                <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <div className="absolute left-0 -bottom-1 h-[2px] bg-black group-hover:w-full w-0 transition-all duration-400"></div>

              <div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 p-2 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {["iphone", "samsung", "google-pixel"].map((brand) => (
                  <Link
                    key={brand}
                    href={`/phonesAndTablet/${brand}`}
                    className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 capitalize"
                  >
                    {brand.replace("-", " ")}
                  </Link>
                ))}
                <Link
                  href="/phonesAndTablet"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 border-t mt-2 pt-3"
                >
                  View All Smartphones
                </Link>
              </div>
            </li>

            {/* Laptops Dropdown */}
            <li className="text-[#909090] text-[20px] relative group">
              <div className="flex items-center cursor-pointer hover:text-black">
                <Link href="/computers" className="hover:text-black">
                  Laptops
                </Link>
                <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <div className="absolute left-0 -bottom-1 h-[2px] bg-black group-hover:w-full w-0 transition-all duration-400"></div>

              <div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-52 p-2 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {["macbooks", "dell", "hp", "microsoft"].map((brand) => (
                  <Link
                    key={brand}
                    href={`/computers/${brand}`}
                    className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 capitalize"
                  >
                    {brand.replace("-", " ")}
                  </Link>
                ))}
                <Link
                  href="/computers"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 border-t mt-2 pt-3"
                >
                  View All Laptops
                </Link>
              </div>
            </li>

            {/* Gaming Dropdown */}
            <li className="text-[#909090] text-[20px] relative group">
              <div className="flex items-center cursor-pointer hover:text-black">
                <Link href="/games" className="hover:text-black">
                  Gaming
                </Link>
                <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <div className="absolute left-0 -bottom-1 h-[2px] bg-black group-hover:w-full w-0 transition-all duration-400"></div>

              <div
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-56 p-2 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {["playstation", "xbox", "nintendo"].map((item) => (
                  <Link
                    key={item}
                    href={`/games/${item}`}
                    className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 capitalize"
                  >
                    {item.replace("-", " ")}
                  </Link>
                ))}
                <Link
                  href="/games"
                  className="block py-2 px-4 hover:bg-gray-100 rounded-lg text-gray-700 border-t mt-2 pt-3"
                >
                  View All Gaming
                </Link>
              </div>
            </li>

            <li className="text-[#909090] text-[20px] relative group">
              <Link href="/contacts" className="hover:text-black">
                Contacts
              </Link>
              <div className="absolute left-0 -bottom-1 h-[2px] bg-black group-hover:w-full w-0 transition-all duration-300"></div>
            </li>
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {isLoggedIn && userName && (
            <span className="hidden sm:inline">Hi, {userName}!</span>
          )}

          <Link href="/cart">
            <MdOutlineShoppingCart className="cursor-pointer h-[23px] w-[23px] sm:h-[30px] sm:w-[30px] text-black" />
          </Link>

          <div className="relative" ref={dropdownRef}>
            <CgProfile
              onClick={handleContactClick}
              className="cursor-pointer h-[23px] w-[23px] sm:h-[30px] sm:w-[30px] text-black"
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-9 bg-gray-300 shadow-lg rounded-lg w-40 p-2 z-50">
                <div className="flex flex-col gap-2">
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="bg-white text-black px-3 py-1 mt-5 rounded hover:bg-gray-200 mx-4"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link href="/login">
                        <div className="block py-2 px-4 hover:bg-gray-200 text-black rounded-lg cursor-pointer">
                          Login
                        </div>
                      </Link>
                      <Link href="/signup">
                        <div className="block py-2 px-4 hover:bg-gray-200 text-black rounded-lg cursor-pointer">
                          Sign Up
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu overlay */}
      {isOpen && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {/* mobile menu panel */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-[70%] h-full bg-white z-20 shadow-lg overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <AiOutlineClose
              className="cursor-pointer"
              size={25}
              onClick={toggleMenu}
            />
          </div>

          <nav className="flex flex-col px-5 py-6 space-y-6 text-lg text-[#444]">
            <Link href="/" onClick={toggleMenu} className="hover:text-black">
              Home
            </Link>

            {/* Smartphones Dropdown Block */}
            <div className="flex flex-col space-y-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleMobileDropdown("smartphone")}
              >
                <span>Smartphones</span>
                <FaChevronDown
                  className={`transition-transform ${
                    mobileDropdowns.smartphone ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileDropdowns.smartphone && (
                <div className="ml-4 mt-2 flex flex-col space-y-2 text-base text-gray-700">
                  {["iphone", "samsung", "google-pixel"].map((item) => (
                    <Link
                      key={item}
                      href={`/phonesAndTablet/${item}`}
                      onClick={toggleMenu}
                    >
                      {item.replace("-", " ")}
                    </Link>
                  ))}
                  <Link href="/phonesAndTablet" onClick={toggleMenu}>
                    View All
                  </Link>
                </div>
              )}
            </div>

            {/* Laptops Dropdown Block */}
            <div className="flex flex-col space-y-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleMobileDropdown("laptop")}
              >
                <span>Laptops</span>
                <FaChevronDown
                  className={`transition-transform ${
                    mobileDropdowns.laptop ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileDropdowns.laptop && (
                <div className="ml-4 mt-2 flex flex-col space-y-2 text-base text-gray-700">
                  {["macbooks", "dell", "hp", "microsoft"].map((item) => (
                    <Link
                      key={item}
                      href={`/computers/${item}`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  ))}
                  <Link href="/computers" onClick={toggleMenu}>
                    View All
                  </Link>
                </div>
              )}
            </div>

            {/* Gaming Dropdown Block */}
            <div className="flex flex-col space-y-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleMobileDropdown("gaming")}
              >
                <span>Gaming</span>
                <FaChevronDown
                  className={`transition-transform ${
                    mobileDropdowns.gaming ? "rotate-180" : ""
                  }`}
                />
              </div>
              {mobileDropdowns.gaming && (
                <div className="ml-4 mt-2 flex flex-col space-y-2 text-base text-gray-700">
                  {["playstation", "xbox", "nintendo"].map((item) => (
                    <Link
                      key={item}
                      href={`/games/${item}`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  ))}
                  <Link href="/games" onClick={toggleMenu}>
                    View All
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contacts"
              onClick={toggleMenu}
              className="hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
