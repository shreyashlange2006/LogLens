import { useEffect, useState } from "react";

function LiveStatus({ summary, filename }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!summary) return null;

    let threat = "LOW";

    if (summary.attacks >= 7)
        threat = "CRITICAL";
    else if (summary.attacks >= 5)
        threat = "HIGH";
    else if (summary.attacks >= 2)
        threat = "MEDIUM";

    return (
        <div
            style={{
                background: "#111827",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "25px",
                border: "1px solid #334155",
                color: "white",
            }}
        >
            <h2 style={{ marginBottom: "20px" }}>
                🖥 Security Operations Status
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                <StatusItem
                    title="SYSTEM STATUS"
                    value="ONLINE"
                    color="#22c55e"
                />

                <StatusItem
                    title="CURRENT TIME"
                    value={time.toLocaleTimeString()}
                    color="#38bdf8"
                />

                <StatusItem
                    title="LAST ANALYZED FILE"
                    value={filename}
                    color="#facc15"
                />

                <StatusItem
                    title="THREAT LEVEL"
                    value={threat}
                    color={
                        threat === "CRITICAL"
                            ? "#ef4444"
                            : threat === "HIGH"
                            ? "#f97316"
                            : threat === "MEDIUM"
                            ? "#facc15"
                            : "#22c55e"
                    }
                />

               
            </div>
        </div>
    );
}

function StatusItem({ title, value, color }) {
    return (
        <div
            style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "18px",
            }}
        >
            <div
                style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    marginBottom: "8px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color,
                }}
            >
                {value}
            </div>
        </div>
    );
}

export default LiveStatus;