export const metadata = {
  title: "WooRank Clone",
  description: "SEO Audit Tool",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}