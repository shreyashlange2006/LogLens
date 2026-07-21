function SummaryCards({ summary }) {
    if (!summary) return null;

    const cards = [
        {
            title: "Total Logs",
            value: summary.total_logs,
            icon: "📄",
            color: "#2563eb",
            description: "Events Processed",
        },
        {
            title: "Threats Detected",
            value: summary.attacks,
            icon: "🚨",
            color: "#ef4444",
            description: "Security Alerts",
        },
        {
            title: "Safe Logs",
            value: summary.normal_logs,
            icon: "🛡️",
            color: "#22c55e",
            description: "Legitimate Requests",
        },
        {
            title: "Attack Types",
            value: Object.keys(summary.attack_types).length,
            icon: "⚠️",
            color: "#f59e0b",
            description: "Unique Signatures",
        },
        {
            title: "Average Risk",
            value: summary.average_risk,
            suffix: "/100",
            icon: "🎯",
            color:
                summary.average_risk >= 80
                    ? "#dc2626"
                    : summary.average_risk >= 50
                    ? "#ea580c"
                    : "#16a34a",
            description: "Overall Threat Score",
        },
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns:
                    "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginBottom: "35px",
            }}
        >
            {cards.map((card) => (
                <div
                    key={card.title}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                            "translateY(-6px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                            "translateY(0)";
                    }}
                    style={{
                        background: "#ffffff",
                        borderRadius: "22px",
                        padding: "25px",
                        boxShadow:
                            "0 18px 40px rgba(0,0,0,.22)",
                        borderLeft: `6px solid ${card.color}`,
                        transition: "all .25s ease",
                        minHeight: "160px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    color: "#64748b",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                }}
                            >
                                {card.title}
                            </div>

                            <div
                                style={{
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    color: card.color,
                                    marginTop: "8px",
                                }}
                            >
                                {card.value}
                                {card.suffix || ""}
                            </div>

                            <div
                                style={{
                                    marginTop: "12px",
                                    color: "#94a3b8",
                                    fontSize: "13px",
                                }}
                            >
                                {card.description}
                            </div>
                        </div>

                        <div
                            style={{
                                fontSize: "44px",
                            }}
                        >
                            {card.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SummaryCards;