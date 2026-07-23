"use client";

import { useState } from "react";

export default function SearchBox() {
  const [url, setUrl] = useState("");

  const analyzeWebsite = () => {
    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    console.log(url);

    // आगे API call यहीं होगी
  };

  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={analyzeWebsite}>
        Analyze
      </button>

    </div>
  );
}