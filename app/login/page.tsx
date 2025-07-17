'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { useAuthStore } from '@/lib/useAuthStore';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Login() {
  const router = useRouter();
  const loginToStore = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { email, password } = formData;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const userId = data.user?.id;
    if (userId) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('name')
        .eq('id', userId)
        .single();

      if (profile?.name) {
        loginToStore(profile.name); // set Zustand state
        router.push('/');
      } else {
        setError('Profile not found');
      }
    } else {
      setError('User ID not found');
    }

    setLoading(false);
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

      {/* Form section */}
      <div className="lg:w-1/2 w-full bg-gray-50 min-h-screen flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-semibold mb-5">Login</h2>
          <p className="mb-5">Please enter your details to sign in.</p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-[grey]"
            required
          />

          <div className="w-full mb-4 py-2 rounded-lg">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[grey]"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-gray-800 transition rounded-lg"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="text-center mt-4 text-[#6C6C6C]">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
