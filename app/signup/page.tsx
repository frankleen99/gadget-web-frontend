// 'use client'

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';  // Import eye icons

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validate()) {
//       console.log('Form Data:', formData);
//       // Handle successful form submission (e.g., send to API)
//     }
//   };

//   return (

//     <div className="h-screen overflow-hidden">

//       {/* Logo for small screens */}
//       <div className="flex items-center justify-center pt-5 lg:hidden">
//         <Image
//           width={160}
//           height={160}
//           alt="logo"
//           priority
//           src="/images/Gadgetlogo.png"
//         />
//       </div>

//       <div className="flex h-screen">

//         {/* Left side image */}

//         <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
//           <Image
//             src="/images/gadget2.png"
//             alt="Signup"
//             width={600}
//             height={900}
//             className="w-[80%] h-[70%] rounded-lg shadow-md"
//           />
//         </div>


//         {/* Right side form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-52 lg:mb-0">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold mb-5 ">Sign Up</h2>
//             <p className='mb-5'>Please Enter your details to create account.</p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Confirm Password</label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] hover:text-white transition-all duration-300 ease-in-out"

//               >
//                 Sign Up
//               </button>

//               <p className="text-center mt-4 text-[#6C6C6C]">
//                 Already have an account?{' '}
//                 <Link href="/login" className="text-blue-600 hover:underline">
//                   Login
//                 </Link>
//               </p>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { z } from 'zod';
// import { supabase } from '@/lib/supabaseClient';

// const signupSchema = z.object({
//   name: z.string().min(1, 'Name is required'),
//   email: z.string().email('Enter a valid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   confirmPassword: z.string().min(6, 'Please confirm your password'),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords do not match',
//   path: ['confirmPassword'],
// });

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       signupSchema.parse(formData);
//       setErrors({});

//       const { email, password } = formData;
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         setErrors({ general: error.message });
//       } else {
//         console.log('Signed up:', data);
//         alert('Sign-up successful! Please check your email to verify your account.');
//       }
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors: Record<string, string> = {};
//         err.errors.forEach((error) => {
//           const field = error.path[0] as string;
//           fieldErrors[field] = error.message;
//         });
//         setErrors(fieldErrors);
//       }
//     }
//   };

//   return (
//     <div className="h-screen overflow-hidden">
//       {/* Logo for small screens */}
//       <div className="flex items-center justify-center pt-5 lg:hidden">
//         <Image
//           width={160}
//           height={160}
//           alt="logo"
//           priority
//           src="/images/Gadgetlogo.png"
//         />
//       </div>

//       <div className="flex h-screen">
//         {/* Left image */}
//         <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
//           <Image
//             src="/images/gadget2.png"
//             alt="Signup"
//             width={600}
//             height={900}
//             className="w-[80%] h-[70%] rounded-lg shadow-md"
//           />
//         </div>

//         {/* Form */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-52 lg:mb-0">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold mb-5">Sign Up</h2>
//             <p className="mb-5">Please enter your details to create an account.</p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block mb-1 font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Confirm Password</label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
//                   />
//                   <span
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   >
//                     {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                   </span>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//                 )}
//               </div>

//               {errors.general && (
//                 <p className="text-red-500 text-center text-sm">{errors.general}</p>
//               )}

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] hover:text-white transition-all duration-300 ease-in-out"
//               >
//                 Sign Up
//               </button>

//               <p className="text-center mt-4 text-[#6C6C6C]">
//                 Already have an account?{' '}
//                 <Link href="/login" className="text-blue-600 hover:underline">
//                   Login
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { z } from 'zod';
import { supabase } from '@/lib/supabaseClient';

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signupSchema.parse(formData);
      setErrors({});

      const { email, password, name } = formData;

      // Sign up the user with email and password
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrors({ general: error.message });
      } else {
        console.log('Signed up:', data);

        // Insert additional data (name) into the users table's 'Display name' column after successful registration
        const { user } = data;
        const { error: insertError } = await supabase
          .from('users') // Replace with your actual table name
          .insert([
            {
              id: user?.id, // user ID from Supabase auth
              'Display name': name, // Insert name into the 'Display name' column
              email: email,
            },
          ]);

        if (insertError) {
          setErrors({ general: insertError.message });
        } else {
          console.log('User data inserted successfully');
          alert('Sign-up successful! Please check your email to verify your account.');

          // Reset form data and error state
          setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          setErrors({});
        }
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          const field = error.path[0] as string;
          fieldErrors[field] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Logo for small screens */}
      <div className="flex items-center justify-center pt-5 lg:hidden">
        <Image
          width={160}
          height={160}
          alt="logo"
          priority
          src="/images/Gadgetlogo.png"
        />
      </div>

      <div className="flex h-screen">
        {/* Left image */}
        <div className="hidden lg:flex w-1/2 bg-gray-200 items-center justify-center">
          <Image
            src="/images/gadget2.png"
            alt="Signup"
            width={600}
            height={900}
            className="w-[80%] h-[70%] rounded-lg shadow-md"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mb-52 lg:mb-0">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-5">Sign Up</h2>
            <p className="mb-5">Please enter your details to create an account.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div>
                <label className="block mb-1 font-medium">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              {errors.general && (
                <p className="text-red-500 text-center text-sm">{errors.general}</p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-[#333333] hover:text-white transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>

              <p className="text-center mt-4 text-[#6C6C6C]">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
