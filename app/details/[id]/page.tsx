"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { ReactNode } from "react";
import { User } from "@supabase/supabase-js";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

type Product = {
  title: ReactNode;
  id: string;
  image_url: string;
  image_url2?: string;
  image_url3?: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

type CartItem = {
  id: string;
  title: ReactNode;
  price: number;
  quantity: number;
  image: string;
};

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  // Fetch product
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(
          "id, image_url, image_url2, image_url3, description, price, title, rating, category"
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } else {
        setProduct(data);
        setSelectedImage(data.image_url); // Default image
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin" />
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-red-600 text-xl font-semibold">Product not found.</p>
      </div>
    );

  return (
    <div>
      <Navbar />

      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* routes back to previous page */}
          <div className="p-4">
            <button
              onClick={() => router.back()}
              className="text-indigo-600 hover:text-indigo-900 font-semibold text-sm"
            >
              ← Back to products
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 px-6 md:px-10 pb-10">
            {/* Image Section */}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden border">
                <Image
                  src={selectedImage || product.image_url}
                  alt="Selected product image"
                  fill
                  className="object-contain"
                  priority
                  draggable={false}
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3">
                {[product.image_url, product.image_url2, product.image_url3]
                  .filter(Boolean)
                  .map((url, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(url!)}
                      className={`relative w-20 h-20 rounded-lg cursor-pointer border ${
                        selectedImage === url
                          ? "border-indigo-600"
                          : "border-gray-300"
                      }`}
                    >
                      <Image
                        src={url!}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        draggable={false}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {product.title}
              </h1>
              <h2 className="text-sm text-gray-600">{product.description}</h2>
              <p className="text-blue-600 font-medium text-md mb-1">
                ₦{product.price.toLocaleString()}
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: Math.round(product.rating) }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.82 11.18 1 7.09l6.061-.52L10 1l2.939 5.57 6.061.52-4.82 4.09 1.698 6.91z" />
                    </svg>
                  )
                )}
                <span className="ml-2 text-sm text-gray-500">
                  ({product.rating}/5)
                </span>
              </div>

              {/* Category */}
              <p className="text-sm text-gray-600 uppercase">
                Category:{" "}
                <span className="font-semibold text-indigo-800">
                  {product.category}
                </span>
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                This product combines high-quality craftsmanship with modern
                technology to bring you an outstanding experience. Perfect for
                your needs and designed to impress.
              </p>

              <p className="text-xs text-gray-500 italic">
                *Delivery fee not included — may vary based on your location.
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  if (!user) {
                    alert("Please login to add to cart.");
                    router.push("/login");
                  } else {
                    const existingCart: CartItem[] = JSON.parse(
                      localStorage.getItem("cartItems") || "[]"
                    );
                    const itemIndex = existingCart.findIndex(
                      (item: CartItem) => item.id === product.id
                    );

                    if (itemIndex > -1) {
                      existingCart[itemIndex].quantity += 1;
                    } else {
                      existingCart.push({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        quantity: 1,
                        image: selectedImage || product.image_url,
                      });
                    }

                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(existingCart)
                    );
                    router.push("/cart");
                  }
                }}
                className="w-full mt-4 py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
