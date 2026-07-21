function SecurityHealth({ summary }) {
    if (!summary) return null;

    const score = Math.max(
        0,
        Math.round(
            100 -
                (summary.attacks /
                    Math.max(summary.total_logs, 1)) *
                    100
        )
    );

    let color = "#22c55e";
    let status = "Excellent";

    if (score < 90) {
        color = "#eab308";
        status = "Moderate";
    }

    if (score < 70) {
        color = "#f97316";
        status = "Warning";
    }

    if (score < 50) {
        color = "#dc2626";
        status = "Critical";
    }

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                marginBottom: "24px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    color: "#0f172a",
                    marginBottom: "20px",
                    fontSize: "26px",
                    fontWeight: "700",
                }}
            >
                🛡 Security Health
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "30px",
                }}
            >
                <div
                    style={{
                        fontSize: "52px",
                        fontWeight: "800",
                        color: color,
                        lineHeight: "1",
                    }}
                >
                    {score}/100
                </div>

                <div
                    style={{
                        marginTop: "6px",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: color,
                    }}
                >
                    {status}
                </div>
            </div>

            <div
                style={{
                    width: "100%",
                    height: "14px",
                    background: "#e2e8f0",
                    borderRadius: "999px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: `${score}%`,
                        height: "100%",
                        background: color,
                        borderRadius: "999px",
                        transition: "width 0.6s ease",
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    fontSize: "13px",
                    color: "#64748b",
                    fontWeight: "600",
                }}
            >
                <span>Poor</span>
                <span>Excellent</span>
            </div>
        </div>
    );
}

export default SecurityHealth;