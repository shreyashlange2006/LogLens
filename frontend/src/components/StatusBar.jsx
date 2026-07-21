function StatusBar({ summary, filename }) {
    if (!summary) return null;

    const detectionRate = (
        (summary.attacks / summary.total_logs) *
        100
    ).toFixed(1);

    return (
        <div
            style={{
                background: "#111827",
                color: "white",
                borderRadius: "15px",
                padding: "18px 25px",
                marginBottom: "25px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
                border: "1px solid #334155",
            }}
        >
            <div>
                <strong style={{ color: "#22c55e" }}>
                    🟢 System Status
                </strong>
                <br />
                ONLINE
            </div>

            <div>
                <strong>Last Scan</strong>
                <br />
                {filename}
            </div>

            <div>
                <strong>Threats</strong>
                <br />
                {summary.attacks}
            </div>

            <div>
                <strong>Safe Logs</strong>
                <br />
                {summary.normal_logs}
            </div>

            <div>
                <strong>Detection Rate</strong>
                <br />
                {detectionRate}%
            </div>
        </div>
    );
}

export default StatusBar;