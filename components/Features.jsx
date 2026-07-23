const features = [
  {
    title: "SEO Audit",
    text: "Complete technical SEO analysis of your website.",
    icon: "📈",
  },
  {
    title: "Performance",
    text: "Measure loading speed and Core Web Vitals.",
    icon: "⚡",
  },
  {
    title: "Security",
    text: "Check SSL, HTTPS and security headers.",
    icon: "🔒",
  },
  {
    title: "Backlinks",
    text: "Analyze backlinks and domain authority.",
    icon: "🌐",
  },
  {
    title: "Mobile Friendly",
    text: "Verify responsive design and mobile usability.",
    icon: "📱",
  },
  {
    title: "AI Suggestions",
    text: "Receive AI powered SEO recommendations.",
    icon: "🤖",
  },
];

export default function Features() {
  return (
    <section className="features">

      <h2>Everything You Need For SEO</h2>

      <div className="feature-grid">

        {features.map((item) => (

          <div className="feature-card" key={item.title}>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}