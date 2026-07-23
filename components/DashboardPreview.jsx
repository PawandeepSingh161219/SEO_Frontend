"use client";

import { useEffect, useState } from "react";
import { analyzeWebsite } from "@/services/seoService";

export default function DashboardPreview({ website }) {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!website) return;

    const fetchData = async () => {
      try {
        const response = await analyzeWebsite(website);

        // response = { success:true, data:{...} }
        setDashboard(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [website]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!dashboard) {
    return <h2>No Data Found</h2>;
  }

  return (
    <section className="dashboard-preview">

      <div className="dashboard-header">
        <h2>SEO Dashboard Preview</h2>
        <p>See how your website performs in real time.</p>
      </div>

      <div className="dashboard-grid">

        {/* SEO Score */}
        <div className="card score">
          <h3>SEO Score</h3>

          <div className="circle">
            {dashboard.metaTitle.score}
          </div>

          <span>
            {dashboard.metaTitle.score >= 80
              ? "Excellent"
              : dashboard.metaTitle.score >= 50
              ? "Good"
              : "Poor"}
          </span>
        </div>

        {/* Page Speed */}
        <div className="card">
          <h3>Performance</h3>

          <h1>{dashboard.pageSpeed.score}%</h1>

          <p>
            {dashboard.pageSpeed.data.responseTime} ms
          </p>
        </div>

        {/* Headings */}
        <div className="card">
          <h3>Accessibility</h3>

          <h1>{dashboard.headings.h2}</h1>

          <p>
            H1 : {dashboard.headings.h1}
          </p>
        </div>

        {/* SSL */}
        <div className="card">
          <h3>Security</h3>

          <h1>{dashboard.httpsSSL.score}</h1>

          <p>
            {dashboard.httpsSSL.data.httpsEnabled
              ? "HTTPS Enabled"
              : "HTTPS Disabled"}
          </p>
        </div>

        {/* Graph */}
        <div className="graph">

          <h3>SEO Metrics</h3>

          <div className="bars">

            <span
              style={{
                height: `${dashboard.metaTitle.score * 2}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.pageSpeed.score * 2}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.technicalSEO.score * 2}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.httpsSSL.score * 2}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.crawlability.score * 2}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.images.data.totalImages * 5}px`,
              }}
            ></span>

            <span
              style={{
                height: `${dashboard.sitemap.score * 2}px`,
              }}
            ></span>

          </div>

        </div>

      </div>
    </section>
  );
}