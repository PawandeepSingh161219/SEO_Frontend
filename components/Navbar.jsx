import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="/">WooRank</Link>
        </div>

        <nav>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/audit">Audit</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-btns">
          <Link href="/login">
            <button className="login-btn">Login</button>
          </Link>

          <button className="trial-btn">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}