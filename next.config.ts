// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.av.com",
      "images.unsplash.com",
      "i.gadgets360cdn.com",
      "media.cnn.com",
      "www.techadvisor.com",
      "i5.walmartimages.com",

      
      "kgzpiygchjeyspyelnsn.supabase.co", // <-- Added Supabase domain here
    ],
  },
};

export default nextConfig;

