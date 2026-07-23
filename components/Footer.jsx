import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div className="footer-col">

            <h2 className="footer-logo">WooRank</h2>

            <p>
              Improve your website SEO with powerful analysis,
              reports and actionable recommendations.
            </p>

          </div>

          <div className="footer-col">

            <h3>Product</h3>

            <Link href="/">SEO Audit</Link>
            <Link href="/">Keyword Tool</Link>
            <Link href="/">Site Crawl</Link>
            <Link href="/">Reports</Link>

          </div>

          <div className="footer-col">

            <h3>Company</h3>

            <Link href="/">About</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Careers</Link>

          </div>

          <div className="footer-col">

            <h3>Resources</h3>

            <Link href="/">Blog</Link>
            <Link href="/">Documentation</Link>
            <Link href="/">Help Center</Link>
            <Link href="/">Privacy Policy</Link>

          </div>

          <div className="footer-col">

            <h3>Newsletter</h3>

            <p>
              Get SEO tips every week.
            </p>

            <div className="footer-input">

              <input
                type="email"
                placeholder="Your Email"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 WooRank Clone. All Rights Reserved.
          </p>

          <div className="social">

            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>

          </div>

        </div>

      </div>

    </footer>
  );
}