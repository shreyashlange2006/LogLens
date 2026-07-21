function MitreCard({ log }) {
    if (!log || !log.attack) return null;

    const mitre = {
        "Brute Force": {
            id: "T1110",
            tactic: "Credential Access",
            technique: "Brute Force",
            color: "#dc2626",
        },

        "SQL Injection": {
            id: "T1190",
            tactic: "Initial Access",
            technique: "Exploit Public-Facing Application",
            color: "#ea580c",
        },

        "Path Traversal": {
            id: "T1006",
            tactic: "Discovery",
            technique: "Path Traversal",
            color: "#ca8a04",
        },

        "XSS": {
            id: "T1189",
            tactic: "Initial Access",
            technique: "Drive-by Compromise",
            color: "#2563eb",
        },
    };

    const attack = mitre[log.attack];

    if (!attack) return null;

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "25px",
                marginTop: "30px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
            }}
        >
            <h2
                style={{
                    color: "#0f172a",
                    marginBottom: "25px",
                }}
            >
                🎯 MITRE ATT&CK Mapping
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "18px",
                }}
            >
                <Card
                    title="Technique ID"
                    value={attack.id}
                    color={attack.color}
                />

                <Card
                    title="Tactic"
                    value={attack.tactic}
                    color={attack.color}
                />

                <Card
                    title="Technique"
                    value={attack.technique}
                    color={attack.color}
                />

                <Card
                    title="Attack"
                    value={log.attack}
                    color={attack.color}
                />
            </div>
        </div>
    );
}

function Card({ title, value, color }) {
    return (
        <div
            style={{
                background: "#f8fafc",
                borderRadius: "15px",
                padding: "18px",
                borderLeft: `5px solid ${color}`,
            }}
        >
            <div
                style={{
                    color: "#64748b",
                    fontSize: "13px",
                    marginBottom: "8px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontWeight: "700",
                    color: "#0f172a",
                }}
            >
                {value}
            </div>
        </div>
    );
}

export default MitreCard;