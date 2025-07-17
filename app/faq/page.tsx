"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What types of gadgets do you sell?",
      answer:
        "We sell a wide range of gadgets including smartphones, laptops, smartwatches, JBL audio, routers, accessories, and much more.",
    },
    {
      question: "Do your gadgets come with a warranty?",
      answer:
        "Yes, all our products come with a manufacturer's warranty, and selected items have options for extended warranty.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 7 days of delivery for items in original condition. Defective items can be replaced or refunded.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3–5 business days. You can also choose express shipping during checkout.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! Our expert support team is available 24/7 to assist with any inquiries or technical issues.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white px-4 py-10">
        {/* FAQ Section */}
        <div className="bg-gray-50 py-16 px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`transform transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeIndex === index && (
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
