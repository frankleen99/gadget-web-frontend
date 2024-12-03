"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/list?name=${encodeURIComponent(input)}`);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex justify-center items-center mt-8  absolute top-20 left-1/2 transform -translate-x-1/2 w-full px-4">
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl"
      >
        {/* Input Field */}
        <input
          type="text"
          name="name"
          placeholder="Type to search"
          value={input}
          onChange={handleChange}
          className="w-full bg-white px-4 py-2 rounded-md border border-gray-300 ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        {/* Search Button */}
        <button
          type="submit"
          className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-[8px] rounded-md"
        >
          <FaSearch className="cursor-pointer" size={17} />
        </button>
      </form>
    </div>
  );  
};

export default Searchbar;
