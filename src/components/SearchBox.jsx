"use client";

import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoIosMic } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  console.log(searchTerm);
  const [input, setInput] = useState(searchTerm);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  return (
    <form
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ImCross
        className="text-xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setInput("")}
      />
      <IoIosMic className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-2" />
      <IoIosSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBox;
