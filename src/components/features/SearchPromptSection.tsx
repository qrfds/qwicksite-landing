"use client";

import { useState, FormEvent } from "react";

const REGISTER_URL = "https://vcboard.qrfds.com/register";

interface SearchPromptSectionProps {
  searchPlaceholder: string;
  chipLabels: string[];
}

export function SearchPromptSection({
  searchPlaceholder,
  chipLabels,
}: SearchPromptSectionProps) {
  const [query, setQuery] = useState("");

  function navigateWithPrompt(prompt: string) {
    if (!prompt.trim()) return;
    const encoded = encodeURIComponent(prompt.trim());
    window.location.href = `${REGISTER_URL}?prompt=${encoded}`;
  }

  function handleSearchSubmit(e: FormEvent) {
    e.preventDefault();
    navigateWithPrompt(query);
  }

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="relative max-w-2xl mx-auto w-full"
      >
        <div className="bg-[#154F77] rounded-full p-3 flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="bg-transparent flex-1 outline-none text-gray-300 px-4"
          />
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
        {chipLabels.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => navigateWithPrompt(label)}
            className="bg-[#154F77] hover:bg-[#3E9BAE] rounded-full px-4 py-2 text-sm"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
