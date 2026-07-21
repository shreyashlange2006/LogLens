function RiskGauge({ score }) {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (score / 100) * circumference;

    let color = "#22c55e";

    if (score >= 90)
        color = "#dc2626";
    else if (score >= 70)
        color = "#ea580c";
    else if (score >= 40)
        color = "#eab308";

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "25px",
                marginTop: "30px",
                textAlign: "center",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
            }}
        >
            <h2
                style={{
                    marginBottom: "25px",
                    color: "#0f172a",
                }}
            >
                🎯 Risk Score
            </h2>

            <svg width="170" height="170">
                <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                />

                <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke={color}
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    strokeLinecap="round"
                    transform="rotate(-90 85 85)"
                />

                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="30"
                    fontWeight="bold"
                    fill={color}
                >
                    {score}%
                </text>
            </svg>
        </div>
    );
}

export default RiskGauge;