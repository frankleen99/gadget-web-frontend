"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";


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
        const res = await fetch(`${API_URL}/category/consoles`);
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



  // loading logo
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );

  return (
    <div>
      <Navbar />

      <div className="min-h-screen px-3 lg:px-8 mt-32 ">
        <h1 className="text-2xl font-bold my-6">Product Listings</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#fff] w-full ">
          
          {products.map((product) => (

              <Link href={`/details?id=${product.id}`}>

              <div
                key={product.id}
                className="shadow-[0_-4px_8px_rgba(0,0,0,0.3)] rounded-[10px] pl-2 pr-2 pb-3  "
              >
                <img
                  src={product.image || "/fallback-image.png"}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-[20px] "
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600 font-medium text-md mb-4">
                  {product.price}
                </p>

                <div className="flex gap-3 w-full justify-between lg">
                  <FaRegHeart className="cursor-pointer  text-black" size={25} />
                  <FaShoppingCart className="cursor-pointer  text-black" size={25} />

                  <div className="border border-black rounded-[4px] pr-1 pl-1 font-semibold">Buy Now</div>

                </div>

              </div>


            </Link>


          ))}
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default Page;

