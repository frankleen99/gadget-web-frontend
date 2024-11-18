"use client";
import React from "react";

const CartModal = () => {
  const cartItems = false;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty </div>
      ) : (
        <div>
          <img
            src=""
            alt="image"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="">
            {/* top */}
            <div>
            {/* title */}
            <div>
                <h3>Product Name</h3>
                <div className="">$49</div>
            </div>
            {/* description */}
            <div>
                
            </div>
            </div>
            {/* bottom */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
