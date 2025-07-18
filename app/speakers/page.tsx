"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

type Product = {
  title: ReactNode;
  id: string;
  image_url: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

export default function SpeakerPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSpeaker = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", "speaker");

      if (error) {
        console.error("Error fetching speakers:", error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchSpeaker();
  }, []);

  const handleCardClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"
          aria-label="Loading spinner"
          role="status"
        />
      </div>
    );

  return (
    <div>
      <Navbar />

      <div className="min-h-screen px-4 sm:px-6 lg:px-8 mt-2 p-6">
        {/* routes back to previouss page */}
        <div>
          <button
            onClick={() => router.back()}
            className="text-indigo-600 hover:text-indigo-900 font-semibold text-sm"
          >
            ← Back to Home
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-6">Speakers And Headphones</h1>

        {products.length === 0 ? (
          <p>No speaker found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 bg-[#fff]">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-[16px] p-2 md:p-3 shadow-md hover:shadow-lg transition-shadow bg-[#fff] border border-gray-300 overflow-hidden cursor-pointer w-full flex flex-col"
                onClick={() => handleCardClick(product.id)}
              >
                <div className="flex-shrink-0 mb-2 md:mb-3">
                  <Image
                    src={product.image_url}
                    alt="product"
                    width={500}
                    height={200}
                    className="w-full h-36 md:h-40 object-cover rounded mb-3"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-[13px] md:text-[16px] lg:text-[17px] font-semibold mb-1 line-clamp-2 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-[13px] md:text-[15px] lg:text-[16px] mb-2">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center text-yellow-500 text-xl font-semibold mt-auto">
                    {Array.from({ length: Math.round(product.rating) }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09L5.82 11.18 1 7.09l6.061-.52L10 1l2.939 5.57 6.061.52-4.82 4.09 1.698 6.91z" />
                        </svg>
                      )
                    )}
                    <span className="ml-1 md:ml-2 text-gray-500 text-[10px] md:text-sm">
                      ({product.rating}/5)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
