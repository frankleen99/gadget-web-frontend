// 'use client'

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log('Login Data:', formData);
//       // Handle successful login (e.g., send to API)
//     }
//   };

//   return (



//     <div className="h-screen overflow-hidden">

//       {/* Logo for small screens */}
//       <div className="flex items-center justify-center pt-16 lg:hidden">
//         <Image
//           width={200}
//           height={200}
//           alt="logo"
//           priority
//           src="/images/Gadgetlogo.png"
//         />
//       </div>

//       <div className="flex h-screen">
//         {/* Left side image - visible only on large screens */}
//         <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
//           <Image
//             src="/images/gadget2.png"
//             alt="Login"
//             width={600}
//             height={900}
//             className="w-[80%] h-[70%] rounded-lg shadow-md"
//           />
//         </div>

//         {/* Right side form */}

//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-72 lg:mb-0">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold mb-5">Login</h2>
//             <p className="mb-5">Welcome back! Please Enter your details..</p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">{errors.password}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition"
//               >
//                 Login
//               </button>
//               <p className="text-center mt-4 text-[#6C6C6C]">
//                 Need an account?{" "}
//                 <Link href="/signup" className="text-blue-600 hover:underline">
//                   Create one
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>

//       </div>



//     </div>


//   );
// }



// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { z } from 'zod'; 

// // Define the Zod schema for form validation
// const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
// });

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const result = loginSchema.safeParse(formData);
//     if (!result.success) {
//       // If validation fails, we set errors from Zod validation
//       const errorMessages: Record<string, string> = {};
//       result.error.errors.forEach(err => {
//         errorMessages[err.path[0]] = err.message;
//       });
//       setErrors(errorMessages);
//       return false;
//     }
//     setErrors({}); // Clear errors if validation is successful
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log('Login Data:', formData);

//       // Simulate a successful login (e.g., calling an API)
//       // If successful, clear inputs and set logged in status
//       setFormData({
//         email: '',
//         password: '',
//       });
//       setIsLoggedIn(true); // Set user as logged in

//       // Clear form and set a successful login
//     }
//   };

//   if (isLoggedIn) {
//     return (
      
//         <Link href="/" className="text-blue-600 hover:underline">
//           Go to Home
//         </Link>

//     );
//   }

//   return (
//     <div className="h-screen overflow-hidden">
//       {/* Logo for small screens */}
//       <div className="flex items-center justify-center pt-16 lg:hidden">
//         <Image
//           width={200}
//           height={200}
//           alt="logo"
//           priority
//           src="/images/Gadgetlogo.png"
//         />
//       </div>

//       <div className="flex h-screen">
//         {/* Left side image - visible only on large screens */}
//         <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
//           <Image
//             src="/images/gadget2.png"
//             alt="Login"
//             width={600}
//             height={900}
//             className="w-[80%] h-[70%] rounded-lg shadow-md"
//           />
//         </div>

//         {/* Right side form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-72 lg:mb-0">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold mb-5">Login</h2>
//             <p className="mb-5">Welcome back! Please Enter your details..</p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">{errors.password}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition"
//               >
//                 Login
//               </button>

//               <p className="text-center mt-4 text-[#6C6C6C]">
//                 Need an account?{" "}
//                 <Link href="/signup" className="text-blue-600 hover:underline">
//                   Create one
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { z } from 'zod';
// import Navbar from '../components/NavBar'; 

// // Define the Zod schema for form validation
// const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
// });

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
//   const [email, setEmail] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const result = loginSchema.safeParse(formData);
//     if (!result.success) {
//       // If validation fails, we set errors from Zod validation
//       const errorMessages: Record<string, string> = {};
//       result.error.errors.forEach(err => {
//         errorMessages[err.path[0]] = err.message;
//       });
//       setErrors(errorMessages);
//       return false;
//     }
//     setErrors({}); // Clear errors if validation is successful
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log('Login Data:', formData);

//       // Simulate a successful login (e.g., calling an API)
//       // If successful, clear inputs and set logged in status
//       setFormData({
//         email: '',
//         password: '',
//       });
//       setEmail(formData.email); // Set the email after login
//       setIsLoggedIn(true); // Set user as logged in

//       // Clear form and set a successful login
//     }
//   };

//   if (isLoggedIn) {
//     return (
//       <>
//         <Navbar email={email} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         <Link href="/" className="text-blue-600 hover:underline">
//           Go to Home
//         </Link>
//       </>
//     );
//   }

//   return (
//     <div className="h-screen overflow-hidden">
//       {/* Logo for small screens */}
//       <div className="flex items-center justify-center pt-16 lg:hidden">
//         <Image
//           width={200}
//           height={200}
//           alt="logo"
//           priority
//           src="/images/Gadgetlogo.png"
//         />
//       </div>

//       <div className="flex h-screen">
//         {/* Left side image - visible only on large screens */}
//         <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
//           <Image
//             src="/images/gadget2.png"
//             alt="Login"
//             width={600}
//             height={900}
//             className="w-[80%] h-[70%] rounded-lg shadow-md"
//           />
//         </div>

//         {/* Right side form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-72 lg:mb-0">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold mb-5">Login</h2>
//             <p className="mb-5">Welcome back! Please Enter your details..</p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm">{errors.password}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition"
//               >
//                 Login
//               </button>

//               <p className="text-center mt-4 text-[#6C6C6C]">
//                 Need an account?{" "}
//                 <Link href="/signup" className="text-blue-600 hover:underline">
//                   Create one
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { z } from 'zod';

// Define the Zod schema for form validation
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errorMessages: Record<string, string> = {};
      result.error.errors.forEach(err => {
        errorMessages[err.path[0]] = err.message;
      });
      setErrors(errorMessages);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Login Data:', formData);

      // Simulate a successful login (e.g., calling an API)
      setFormData({
        email: '',
        password: '',
      });
      setIsLoggedIn(true); // Set user as logged in
    }
  };

  if (isLoggedIn) {
    return (
      <Link href="/" className="text-blue-600 hover:underline">
        Go to Home
      </Link>
    );
  }

  return (
    <div className="h-screen overflow-hidden">
      {/* Logo for small screens */}
      <div className="flex items-center justify-center pt-16 lg:hidden">
        <Image
          width={200}
          height={200}
          alt="logo"
          priority
          src="/images/Gadgetlogo.png"
        />
      </div>

      <div className="flex h-screen">
        {/* Left side image - visible only on large screens */}
        <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
          <Image
            src="/images/gadget2.png"
            alt="Login"
            width={600}
            height={900}
            className="w-[80%] h-[70%] rounded-lg shadow-md"
          />
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-72 lg:mb-0">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-5">Login</h2>
            <p className="mb-5">Welcome back! Please Enter your details..</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] transition"
              >
                Login
              </button>

              <p className="text-center mt-4 text-[#6C6C6C]">
                Need an account?{" "}
                <Link href="/signup" className="text-blue-600 hover:underline">
                  Create one
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Passing props to the child component */}
      <Navbar email={formData.email} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

// Navbar Component that will receive the props
type NavbarProps = {
  email: string;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ email, isLoggedIn, setIsLoggedIn }: NavbarProps) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-xl">Home</Link>
        {isLoggedIn ? (
          <div className="flex items-center">
            <span className="text-white">{email}</span>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                alert("Logged out!");
              }}
              className="ml-4 text-white bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="text-white">Login</Link>
        )}
      </div>
    </nav>
  );
};
