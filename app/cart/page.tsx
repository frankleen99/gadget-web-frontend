'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

type CartItem = {
  selectedImage: string; // Changed from `any` to `string`
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  selectedOption?: string;
};

const orderTitle = 'Order from Gadgetweb';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cartItems');
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error parsing cartItems from localStorage', error);
    }
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getWhatsAppMessage = () => {
    let message = `${orderTitle}\n\nHello! I would like to order the following:\n\n`;

    cartItems.forEach((item, i) => {
      message += `${i + 1}. ${item.title || 'No title'} - ₦${item.price.toLocaleString()} x ${item.quantity}\n`;
    });

    message += `\nTotal: ₦${total.toLocaleString()}\n\nNote: Delivery fee not included, as it may vary based on your location.\n\nThank you.`;

    return encodeURIComponent(message);
  };

  const handleBuyClick = () => {
    if (cartItems.length > 0) {
      const whatsappUrl = `https://wa.me/2347041014776?text=${getWhatsAppMessage()}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-16">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Cart Summary</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-6 border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h1 className="text-sm font-bold text-gray-900">
                        {item.title || 'No title'}
                      </h1>

                      {item.selectedOption && (
                        <p className="text-sm text-gray-500">Selected: {item.selectedOption}</p>
                      )}
                      <p className="text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-800 font-bold">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[350px] bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <p>Subtotal</p>
                <p>₦{total.toLocaleString()}</p>
              </div>
              <div className="text-sm text-red-600 mb-4">
                * Delivery fee not included — it may vary by location
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>₦{total.toLocaleString()}</p>
              </div>
              <button
                onClick={handleBuyClick}
                className="mt-6 w-full text-center py-3 bg-black text-white rounded-lg font-semibold hover:opacity-90"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
