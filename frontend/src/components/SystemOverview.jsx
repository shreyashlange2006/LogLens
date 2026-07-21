function Box({ title, value, color }) {
    return (
        <div
            style={{
                background: "#111827",
                padding: "20px",
                borderRadius: "18px",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    color: "#94a3b8",
                    marginBottom: "10px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color,
                }}
            >
                {value}
            </div>
        </div>
    );
}

function SystemOverview() {
    return (
        <div style={{ marginBottom: "35px" }}>
            <h2
                style={{
                    color: "white",
                    marginBottom: "20px",
                }}
            >
                📡 System Overview
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                <Box title="Parser Engine" value="Online" color="#22c55e" />
                <Box title="Threat Engine" value="Running" color="#2563eb" />
                <Box title="Report Generator" value="Ready" color="#f59e0b" />
                <Box title="Dashboard" value="Operational" color="#22c55e" />
            </div>
        </div>
    );
}

export default SystemOverview;