'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

type Product = {
  title: ReactNode;
  id: string;
  image_url: string;
  description: string;
  price: number;
  rating: number;
  category: string;
};

export default function ComputersPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchComputers = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'computers');

      if (error) {
        console.error('Error fetching computers:', error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchComputers();
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

      <div className="min-h-screen px-4 sm:px-6 lg:px-8 mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6">Computers</h1>

        {products.length === 0 ? (
          <p>No computers found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 bg-[#fff]">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-[20px] p-4 shadow-md hover:shadow-lg transition-shadow bg-[#fff] border border-gray-300 overflow-hidden cursor-pointer max-w-full"
                onClick={() => handleCardClick(product.id)}
                style={{ minWidth: '300px' }}
              >
                <Image
                  src={product.image_url}
                  alt="product"
                  width={500}
                  height={200}
                  className="w-full h-40 md:h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-blue-600 font-medium text-md mb-1">
                  ₦{product.price.toLocaleString()}
                </p>


                <p className="flex items-center text-yellow-500 text-xl font-semibold">
                  {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.82 11.18 1 7.09l6.061-.52L10 1l2.939 5.57 6.061.52-4.82 4.09 1.698 6.91z" />
                    </svg>
                  ))}
                  <span className="ml-3 text-gray-500 text-[14px] ">
                    ({product.rating}/5)
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
