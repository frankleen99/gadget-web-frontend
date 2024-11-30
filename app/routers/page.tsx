import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API
  useEffect(() => {
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "https://gadget-web-api.onrender.com";

    async function fetchProducts() {
      try {
        const res = await fetch(`${API_URL}/category/routers`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
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
      <div className="h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="border border-gray-300 mt-[90px] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <img
                src={product.image || "/default-image.png"}
                alt={product.name || "Product"}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

              {/* Product Price */}
              <p className="text-blue-600 font-medium text-md mb-4">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => alert(`Added ${product.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page
