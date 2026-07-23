"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { analyzeWebsite } from "@/services/seoService";

export default function Hero() {
    const [url, setUrl] = useState("");
    const router = useRouter();

    const handleAnalyze = async () => {
    if (!url.trim()) {
        alert("Please enter your website URL");
        return;
    }

    try {
        const response = await analyzeWebsite(url);

        console.log(response, "API Response");

        localStorage.setItem(
            "seoReport",
            JSON.stringify(response)
        );

        router.push(`/report?url=${encodeURIComponent(url)}`);

    } catch (error) {
        console.error(error);
        alert("Failed to analyze website");
    }
};

    return (
        <section className="hero">
            <div className="hero-left">
                <h1>
                    Start Optimizing Your
                    <br />
                    Website
                </h1>

                <p>
                    Run your Review today to get an instant website analysis
                    and learn what you need to do to improve.
                </p>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <button onClick={handleAnalyze}>
                        Check my website's score
                    </button>
                </div>
            </div>

            <div className="hero-right">
                <div className="hero-image">
                    <img
                        src="./images/bg.jpg"
                        alt="Hero"
                    />
                </div>

                <div className="score-card">
                    <div className="circle">
                        82
                    </div>

                    <p>SEO Score</p>
                </div>

                <div className="meta-card">
                    <p>✔ Meta Description</p>
                    <p>✔ Backlinks</p>
                    <p>✔ Technologies</p>
                </div>
            </div>
        </section>
    );
}