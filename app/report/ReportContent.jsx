"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ReportContent() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [report, setReport] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("seoReport");

    if (data) {
      setReport(JSON.parse(data));
    }
  }, []);

  if (!report) {
    return <h2>Loading...</h2>;
  }

  const seo = report.data;

  return (
    <div className="report-page">
      <div className="report-header">
        <div>
          <h1>SEO Report</h1>
          <p>{url}</p>
        </div>

        <div className="score-circle">
          <h2>{seo?.overallScore?.score ?? "--"}</h2>
          <span>{seo?.overallScore?.grade}</span>
        </div>
      </div>
    </div>
  );
}