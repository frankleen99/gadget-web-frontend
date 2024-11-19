"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const router = useRouter();

  //temp
  const isLoggedIn = false;

  // const handleProfile = () => {
  //   if (!isLoggedIn) {
  //     router.push("/");
  //     return; // Prevents setIsProfileOpen from running
  //   }
  //   setIsProfileOpen((prev) => !prev);
  // };

  return (
    <div>
      {/* Shopping Cart (aligned to the right) */}
      <div className="absolute flex top-2 right-1 gap-3">
        <div className="justify-end relative items-center mr-5 mt-3">
          <FaShoppingCart
            className="cursor-pointer"
            size={25}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#F35C7A] rounded-full text-white text-sm flex justify-center text-center">
            0
          </div>
          {isCartOpen && <CartModal />}
        </div>
        <div className="justify-end items-center mr-5 mt-3">
          <IoMdContact
            className="cursor-pointer"
            size={25}
            // onClick={handleProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
