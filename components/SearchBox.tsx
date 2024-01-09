"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between max-w-6xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-[#F18900]"
      ></input>
      <button
        type="submit"
        disabled={!input}
        className="text-[#F18900] disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
