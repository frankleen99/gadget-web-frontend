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

      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setErrors({ general: error.message });
        return;
      }

      const userId = data.user?.id;

      if (userId) {
        // Upsert user's name into the profiles table
        const { error: upsertError } = await supabase
          .from('profiles')
          .upsert([
            {
              id: userId,
              name: name,
            },
          ]);

        if (upsertError) {
          setErrors({ general: upsertError.message });
          return;
        }

        // Store name in localStorage for navbar
        localStorage.setItem('userName', name);

        alert('Sign-up successful! Please check your email to verify your account.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setErrors({});
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
    <div className="flex flex-col lg:flex-row min-h-screen">
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
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 bg-gray-50 min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-5">Sign Up</h2>
          <p className="mb-5">Please enter your details to create an account.</p>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
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
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
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
                className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
              />
              <span
                className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer"
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
                className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
              />
              <span
                className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer"
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
  );
}
