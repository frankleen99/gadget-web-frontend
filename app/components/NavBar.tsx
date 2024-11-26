"use client";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-5 relative">
      <div className="flex items-center justify-between">
        {/* MOBILE Menu */}
        <Menu />
      </div>
      {/* Centered Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Link href="/" aria-label="Homepage">
          <Image
            src="../images/Gadgetweblogo.png"
            alt="Gadget Web logo"
            height={80}
            width={80}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
