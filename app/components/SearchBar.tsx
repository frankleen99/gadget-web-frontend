"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [input, setInput] = useState<string>("");

  const endPoint = "https://gadget-web-api.onrender.com";

  fetch(endPoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

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
   <div className="md:flex mt-3 lg:justify-center items-center absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-10">
  <form
    onSubmit={handleSearch}
    className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl"
  >
    <input
      type="text"
      name="name"
      placeholder="type to search"
      value={input}
      onChange={handleChange}
      className="w-full rounded-md bg-white px-4 py-2 ring-1 ring-black border-black text-black focus:outline-none z-50"
    />
    <button
      type="submit"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-50"
    >
      <FaSearch className="cursor-pointer" size={15} />
    </button>
  </form>
</div>
  );
};

export default Searchbar;
