'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] =useState(true);

  const id = searchParams.get('id');



  type Product = {
    id: number;
    category: string;
    name: string;
    price: string;
    image: string;
    details: string[];
    description: string;
  };


    useEffect(() => {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || `https://gadget-web-api.onrender.com/${id}`;


  
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




  return (
    <div>



    </div>
  )
}

export default page


// 'use client';

// import { useSearchParams } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// const Page = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get('id');

//   type Product = {
//     id: number;
//     category: string;
//     name: string;
//     price: string;
//     image: string;
//     details: string[];
//     description: string;
//   };

//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!id) return; // Ensure ID is available before making API call

  //   const API_URL =
  //     process.env.NEXT_PUBLIC_API_URL || `https://gadget-web-api.onrender.com/${id}`;

  //   async function fetchProducts() {
  //     try {
  //       const res = await fetch(`${API_URL}/category/consoles`);
  //       if (!res.ok) throw new Error("Failed to fetch products");
  //       const data: Product[] = await res.json();
  //       console.log("Fetched Products:", data);
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchProducts();
  // }, [id]); // Add id to dependency array to refetch when it changes


//   useEffect(() => {
//     const fetchHouseDetails = async () => {
//         if (id) {
//             try {
//                 // Update API endpoint to use the UUID 'id' as part of the URL path
//                 const response = await axios.get(`https://elbisapi.onrender.com/v1/api/properties/${id}`);

//                 // Assuming the response directly contains the house details for the given id
//                 const apartment = response.data;
//                 if (apartment && apartment.data) {
//                     setData(apartment.data); // Set the property data directly
//                 } else {
//                     setError('House not found.');
//                 }
//             } catch (error) {
//                 console.error('Error fetching house details:', error);
//                 setError('Failed to load house details.');
//             } finally {
//                 setLoading(false);
//             }
//         } else {
//             setError('No house ID provided in the URL.');
//             setLoading(false);
//         }
//     };

//     fetchHouseDetails();
// }, [id]);

//   return <div>{loading ? <p>Loading...</p> : <p>Products Loaded</p>}</div>;
// };

// export default Page;
