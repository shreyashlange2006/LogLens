const features = [
    {
        icon: "🛡",
        title: "Threat Detection",
        description:
            "Automatically detects Brute Force, SQL Injection, XSS and Directory Traversal attacks using signature matching.",
    },
    {
        icon: "📊",
        title: "Interactive Dashboard",
        description:
            "Visualize attack statistics through charts, KPIs and real-time summaries inspired by SOC dashboards.",
    },
    {
        icon: "🎯",
        title: "Risk Scoring",
        description:
            "Every event receives a calculated risk score and severity level for easier prioritization.",
    },
    {
        icon: "🔍",
        title: "Incident Investigation",
        description:
            "Inspect individual events with recommendations, IOC details and MITRE ATT&CK mappings.",
    },
    {
        icon: "📤",
        title: "Export Reports",
        description:
            "Export analyzed results for documentation and incident reporting.",
    },
    {
        icon: "⚡",
        title: "Fast Analysis",
        description:
            "Parse and analyze Apache, Nginx and CLF logs within seconds.",
    },
];

function FeatureCards() {
    return (
        <div
            style={{
                marginBottom: "50px",
            }}
        >
            <h2
                style={{
                    color: "white",
                    marginBottom: "30px",
                    fontSize: "34px",
                }}
            >
                ⭐ Features
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(320px,1fr))",
                    gap: "25px",
                }}
            >
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-8px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                        }}
                        style={{
                            background: "#111827",
                            padding: "30px",
                            borderRadius: "20px",
                            transition: ".3s",
                            boxShadow:
                                "0 18px 35px rgba(0,0,0,.25)",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "50px",
                                marginBottom: "20px",
                            }}
                        >
                            {feature.icon}
                        </div>

                        <h3
                            style={{
                                color: "white",
                                marginBottom: "15px",
                            }}
                        >
                            {feature.title}
                        </h3>

                        <p
                            style={{
                                color: "#cbd5e1",
                                lineHeight: "1.8",
                            }}
                        >
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeatureCards;