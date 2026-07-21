function IncidentBanner({ log }) {
    if (!log) return null;

    let color = "#22c55e";
    let level = "LOW";
    let message =
        "This request appears to be legitimate.";

    if (log.risk_score >= 90) {
        color = "#dc2626";
        level = "CRITICAL";
        message =
            "Immediate analyst response is recommended.";
    } else if (log.risk_score >= 70) {
        color = "#ea580c";
        level = "HIGH";
        message =
            "Potential security incident requiring investigation.";
    } else if (log.risk_score >= 40) {
        color = "#eab308";
        level = "MEDIUM";
        message =
            "Suspicious activity detected. Review recommended.";
    }

    return (
        <div
            style={{
                background: color,
                color: "white",
                padding: "22px",
                borderRadius: "18px",
                marginBottom: "25px",
                boxShadow: "0 12px 25px rgba(0,0,0,.25)",
            }}
        >
            <div
                style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    marginBottom: "8px",
                }}
            >
                🚨 {level} INCIDENT
            </div>

            <div
                style={{
                    fontSize: "16px",
                    opacity: .95,
                }}
            >
                {message}
            </div>
        </div>
    );
}

export default IncidentBanner;