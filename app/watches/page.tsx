"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

type Product = {
  id: number;
  category: string;
  name: string;
  price: string;
  image: string;
  details: string[];
  description: string;
};

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "https://gadget-web-api.onrender.com";

    async function fetchProducts() {
      try {
        const res = await fetch(`${API_URL}/category/watches`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();
        console.log("Fetched Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 mt-40">
        <h1 className="text-2xl font-bold my-6">Product Listings</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#fff]">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-[20px] p-4 shadow-md hover:shadow-lg transition-shadow bg-[#fff] border border-gray-300 overflow-hidden"
            >
              <Image
                src={product.image || "/fallback-image.png"}
                alt={product.name}
                width={500}
                height={200}
                className="w-full h-40 object-cover rounded-t-[20px] mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-blue-600 font-medium text-md mb-4">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
