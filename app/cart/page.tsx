import Image from 'next/image';
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: "Wireless Bluetooth Headset",
            price: 4500,
            quantity: 1,
            image: "/headset.jpg", 
        },
        {
            id: 2,
            name: "Smart LED TV 32 Inches",
            price: 85000,
            quantity: 1,
            image: "/tv.jpg",
        },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <Navbar/>
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-16">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Cart Summary</h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Cart Items */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between mb-6 border-b pb-4">
                            <div className="flex items-center gap-4">
                                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg object-cover" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button className="w-7 h-7 bg-gray-200 rounded">-</button>
                                        <span className="text-sm">{item.quantity}</span>
                                        <button className="w-7 h-7 bg-gray-200 rounded">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-800 font-bold">₦{(item.price * item.quantity).toLocaleString()}</p>
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
                    <div className="flex justify-between text-sm text-gray-700 mb-4">
                        <p>Delivery</p>
                        <p>₦1,500</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between font-semibold text-lg">
                        <p>Total</p>
                        <p>₦{(total + 1500).toLocaleString()}</p>
                    </div>
                    <button className="mt-6 w-full py-3 bg-black text-white rounded-lg font-semibold hover:opacity-90">
                        Proceed to Buy
                    </button>
                </div>
            </div>
        </div>
        <Footer/>

        </div>
    );
};

export default Cart;
