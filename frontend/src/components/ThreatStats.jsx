function ThreatStats({ summary }) {
    if (!summary) return null;

    const topAttack =
        Object.entries(summary.attack_types).sort(
            (a, b) => b[1] - a[1]
        )[0];

    const topAttacker =
        Object.entries(summary.top_attackers).sort(
            (a, b) => b[1] - a[1]
        )[0];

    const overallThreat =
        summary.attacks > summary.normal_logs
            ? "HIGH"
            : summary.attacks > 0
            ? "MEDIUM"
            : "LOW";

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
                marginBottom: "25px",
            }}
        >
            <h2 style={{ marginBottom: "20px" }}>
                📊 Threat Statistics
            </h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
            >
                <tbody>
                    <Row
                        title="Highest Risk Attack"
                        value={topAttack?.[0] || "-"}
                    />

                    <Row
                        title="Most Active Attacker"
                        value={topAttacker?.[0] || "-"}
                    />

                    <Row
                        title="Threat Level"
                        value={overallThreat}
                    />

                    <Row
                        title="Detection Engine"
                        value="ACTIVE"
                    />

                    <Row
                        title="Events Processed"
                        value={summary.total_logs}
                    />
                </tbody>
            </table>
        </div>
    );
}

function Row({ title, value }) {
    return (
        <tr>
            <td
                style={{
                    padding: "14px",
                    fontWeight: "600",
                    color: "#475569",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                {title}
            </td>

            <td
                style={{
                    padding: "14px",
                    fontWeight: "bold",
                    color: "#0f172a",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                {value}
            </td>
        </tr>
    );
}

export default ThreatStats;