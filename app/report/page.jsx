"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Report() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [report, setReport] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("seoReport");

    if (data) {
      setReport(JSON.parse(data));
    }
  }, []);

  if (!report) return <h2>Loading...</h2>;

  const seo = report.data;

  return (
    <div className="report-page">

      <div className="report-header">

        <div>
          <h1>SEO Report</h1>
          <p>{url}</p>
        </div>

        <div className="score-circle">
          <h2>{seo.overallScore.score ?? "--"}</h2>
          <span>{seo.overallScore.grade}</span>
        </div>

      </div>

      <div className="report-grid">

        <Card
          title="Meta Title"
          score={seo.metaTitle.score}
          text={
            seo.metaTitle.passed
              ? "Passed"
              : seo.metaTitle.issues.join(", ")
          }
        />

        <Card
          title="Meta Description"
          score={seo.metaDescription.score}
          text={
            seo.metaDescription.passed
              ? "Passed"
              : seo.metaDescription.issues.join(", ")
          }
        />

        <Card
          title="Page Speed"
          score={seo.pageSpeed.score}
          text={`Response Time ${seo.pageSpeed.data.responseTime} ms`}
        />

        <Card
          title="Images"
          score={seo.images.score}
          text={`Missing Alt : ${seo.images.data.missingAlt}`}
        />

        <Card
          title="HTTPS / SSL"
          score={seo.httpsSSL.score}
          text={
            seo.httpsSSL.data.httpsEnabled
              ? "SSL Enabled"
              : "SSL Disabled"
          }
        />

        <Card
          title="Technical SEO"
          score={seo.technicalSEO.score}
          text={
            seo.technicalSEO.issues.length
              ? seo.technicalSEO.issues[0]
              : "Passed"
          }
        />

      </div>

    </div>
  );
}

function Card({ title, score, text }) {

  const status =
    score >= 80 ? "good" :
    score >= 50 ? "medium" :
    "bad";

  return (
    <div className={`report-card ${status}`}>
      <h3>{title}</h3>

      <h2>{score}/100</h2>

      <div className="progress">
        <span style={{ width: `${score}%` }} />
      </div>

      <p>{text}</p>
    </div>
  );
}