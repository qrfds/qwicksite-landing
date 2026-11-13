"use client";

import { useState, FormEvent } from "react";

const REGISTER_URL = "https://app.qwicksite.com/register";

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
        {...{
          toolname: "start_qwicksite_website",
          tooldescription:
            "Opens QwickSite registration with a description of the website the user wants to create.",
        }}
        onSubmit={handleSearchSubmit}
        className="relative max-w-2xl mx-auto w-full"
      >
        <label htmlFor="website-description" className="sr-only">
          {searchPlaceholder}
        </label>
        <div className="bg-[#154F77] rounded-full p-3 flex items-center">
          <input
            {...{
              toolparamdescription:
                "A short description of the business and website to create.",
            }}
            id="website-description"
            name="prompt"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            autoComplete="off"
            required
            className="bg-transparent flex-1 outline-none text-gray-300 px-4"
          />
          <button type="submit" className="sr-only">
            Start building this website
          </button>
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
