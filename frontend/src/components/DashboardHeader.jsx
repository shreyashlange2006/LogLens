function DashboardHeader({ summary }) {
    let systemStatus = "Protected";
    let systemColor = "#22c55e";
    let systemIcon = "🟢";

    if (summary) {
        if (summary.attacks >= 6) {
            systemStatus = "Under Attack";
            systemColor = "#dc2626";
            systemIcon = "🔴";
        } else if (summary.attacks >= 3) {
            systemStatus = "Warning";
            systemColor = "#f59e0b";
            systemIcon = "🟠";
        } else if (summary.attacks >= 1) {
            systemStatus = "Monitoring";
            systemColor = "#3b82f6";
            systemIcon = "🔵";
        }
    }

    return (
        <div
            style={{
                background: "#111827",
                color: "white",
                padding: "30px",
                borderRadius: "18px",
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,.35)",
            }}
        >
            <h1
                style={{
                    margin: 0,
                    fontSize: "42px",
                    fontWeight: "700",
                }}
            >
                🛡 LogLens
            </h1>

            <p
                style={{
                    color: "#94a3b8",
                    marginTop: "10px",
                    fontSize: "18px",
                }}
            >
                Security Operations Dashboard
            </p>

            {summary && (
                <div
                    style={{
                        display: "flex",
                        gap: "25px",
                        flexWrap: "wrap",
                        marginTop: "25px",
                    }}
                >
                    <InfoCard
                        title="System"
                        value={`${systemIcon} ${systemStatus}`}
                        color={systemColor}
                    />

                    <InfoCard
                        title="Logs"
                        value={summary.total_logs}
                        color="#3b82f6"
                    />

                    <InfoCard
                        title="Threats"
                        value={summary.attacks}
                        color="#ef4444"
                    />

                    <InfoCard
                        title="Attack Types"
                        value={Object.keys(summary.attack_types).length}
                        color="#f59e0b"
                    />
                </div>
            )}
        </div>
    );
}

function InfoCard({ title, value, color }) {
    return (
        <div
            style={{
                background: "#1e293b",
                padding: "15px 25px",
                borderRadius: "12px",
                minWidth: "170px",
                transition: "0.3s",
                borderLeft: `4px solid ${color}`,
            }}
        >
            <div
                style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    marginBottom: "6px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color,
                }}
            >
                {value}
            </div>
        </div>
    );
}

export default DashboardHeader;