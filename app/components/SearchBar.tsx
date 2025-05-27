'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [noMatch, setNoMatch] = useState(false);

  const handleSearch = () => {
    const input = searchTerm.toLowerCase().trim();

    if (!input) {
      setNoMatch(false);
      return;
    }

    const keywordMap: { [page: string]: string[] } = {
      "/computers": [
        "computer",
        "laptop",
        "notebook",
        "desktop",
        "macbook",
        "imac",
        "lenovo",
        "dell",
        "hp",
        "asus",
        "acer",
        "chromebook",
        "workstation",
      ],
      "/phonesAndTablet": [
        "phone",
        "iphone",
        "ipad",
        "smartphone",
        "tablet",
        "android",
        "samsung",
        "xiaomi",
        "oneplus",
        "pixel",
        "mobile",
        "cellphone",
        "galaxy",
        "huawei",
      ],
      "/routers": [
        "router",
        "wifi",
        "modem",
        "wireless",
        "network",
        "access point",
        "tp-link",
        "netgear",
        "cisco",
        "linksys",
      ],
      "/television": [
        "tv",
        "television",
        "smart tv",
        "led tv",
        "oled",
        "sony",
        "samsung tv",
        "lg",
        "panasonic",
        "tcl",
        "vizio",
      ],
      "/games": [
        "game",
        "gaming",
        "console",
        "playstation",
        "ps5",
        "xbox",
        "nintendo",
        "switch",
        "pc gaming",
        "vr",
        "steam",
      ],
      "/speakers": [
        "speaker",
        "speakers",
        "bluetooth speaker",
        "wireless speaker",
        "soundbar",
        "home theater",
        "jbl",
        "bose",
        "sony speaker",
        "portable speaker",
        "audio",
      ],
      "/watches": [
        "watch",
        "watches",
        "smartwatch",
        "apple watch",
        "fitbit",
        "garmin",
        "fossil",
        "casio",
        "digital watch",
        "analog watch",
        "wearable",
      ],
    };

    
    const matchedPage = Object.entries(keywordMap).find(([, keywords]) =>
      keywords.some((keyword) => input.includes(keyword))
    );

    if (matchedPage) {
      setNoMatch(false);
      router.push(matchedPage[0]);
    } else {
      setNoMatch(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-[330px] lg:w-[600px] md:w-[600px] max-w-md mx-auto mt-10 z-0">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[gray]"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 flex items-center px-4 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-[gray]"
      >
        Search
      </button>

      {noMatch && (
        <p className="text-[12px] absolute left-0 right-0 mt-1 text-center text-red-600 font-semibold pointer-events-none">
          No matching item found for your search.
        </p>
      )}
    </div>
  );
};

export default SearchInput;
