export default function Companies() {
    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Meta",
        "Netflix",
        "Spotify",
    ];

    return (
        <section className="companies">

            <h2>
                Trusted by Leading Companies Worldwide
            </h2>

            <div className="company-grid">

                {companies.map((company) => (
                    <div key={company} className="company-card">
                        {company}
                    </div>
                ))}

            </div>

        </section>
    );
}