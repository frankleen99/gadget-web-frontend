"use client"
import React from "react";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-5 relative">
      <div className="flex items-center justify-between">
        {/* MOBILE Menu */}
        <Menu />
      </div>
      {/* Centered Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/3">
        <Link href="/">
          <img
            src="/Gadgetweblogo.png"
            alt="logo"
            height={80}
            width={80}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
