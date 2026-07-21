function ExecutiveSummary({ summary }) {
    if (!summary) return null;

    const attackTypes = Object.keys(summary.attack_types);

    const mostCommonAttack =
        attackTypes.length > 0
            ? attackTypes.reduce((a, b) =>
                  summary.attack_types[a] > summary.attack_types[b] ? a : b
              )
            : "None";

    const topAttacker =
        Object.keys(summary.top_attackers).length > 0
            ? Object.keys(summary.top_attackers)[0]
            : "Unknown";

    let securityLevel = "Secure";
    let color = "#16a34a";

    if (summary.average_risk >= 80) {
        securityLevel = "Critical";
        color = "#dc2626";
    } else if (summary.average_risk >= 60) {
        securityLevel = "High";
        color = "#ea580c";
    } else if (summary.average_risk >= 40) {
        securityLevel = "Medium";
        color = "#ca8a04";
    }

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                marginBottom: "30px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
            }}
        >
            <h2
                style={{
                    color: "#0f172a",
                    marginBottom: "20px",
                }}
            >
                📄 Executive Security Summary
            </h2>

            <div
                style={{
                    background: color,
                    color: "white",
                    padding: "18px",
                    borderRadius: "15px",
                    marginBottom: "25px",
                }}
            >
                <strong>Overall Security Status:</strong> {securityLevel}
            </div>

            <p
                style={{
                    color: "#334155",
                    lineHeight: "1.9",
                    fontSize: "17px",
                }}
            >
                LogLens analyzed <strong>{summary.total_logs}</strong> web
                server events and detected{" "}
                <strong>{summary.attacks}</strong> malicious requests.
                The most common attack observed was{" "}
                <strong>{mostCommonAttack}</strong>. The most active
                attacking IP address was <strong>{topAttacker}</strong>.
                The average calculated risk score is{" "}
                <strong>{summary.average_risk}/100</strong>, indicating a{" "}
                <strong>{securityLevel}</strong> security posture.
                Immediate review of detected incidents is recommended.
            </p>
        </div>
    );
}

export default ExecutiveSummary;