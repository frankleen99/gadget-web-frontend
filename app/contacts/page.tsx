"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  const router = useRouter();
  // Function to handle back navigation

  return (
    <div>
      {/* Navbar import */}
      <Navbar />
      {/* Contact Page Content */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        {/* routes back to previous page */}
        <div>
          <button
            onClick={() => router.back()}
            className="text-indigo-600 hover:text-indigo-900 font-semibold text-sm"
          >
            ← Back to Home
          </button>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg font-light text-gray-600">
            Have a question or need assistance? We&apos;re here to help! Reach
            out to us through any of the channels below, and we&apos;ll get back
            to you as soon as possible.
          </p>
        </div>

        {/* Contact Methods Section */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Ways to Reach Us
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="text-center bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <a
                href="https://www.instagram.com/gadgethub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl mb-4 mx-auto text-indigo-600" />
                <h4 className="text-xl font-bold">Instagram</h4>
                <p className="text-sm">
                  Follow us for the latest gadgets and tech updates!
                </p>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-4xl mb-4 mx-auto text-green-500" />
                <h4 className="text-xl font-bold">WhatsApp</h4>
                <p className="text-sm">Chat directly with our support team!</p>
              </a>
            </div>

            {/* Email */}
            <div className="text-center bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <a href="mailto:support@gadgethub.com">
                <FaEnvelope className="text-4xl mb-4 mx-auto text-red-500" />
                <h4 className="text-xl font-bold">Email</h4>
                <p className="text-sm">
                  Send us an email, and we&apos;ll reply within 24 hours.
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 max-w-3xl mx-auto text-center text-gray-600">
          <p className="text-sm font-light mb-8">
            If you prefer, you can also fill out the form below, and our team
            will reach out to you directly:
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <form action="#" method="POST" className="space-y-6">
              {/* Full Name and Email Fields with Flex */}
              <div className="flex space-x-6">
                {/* Full Name Field */}
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Email Field */}
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 border border-transparent text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
