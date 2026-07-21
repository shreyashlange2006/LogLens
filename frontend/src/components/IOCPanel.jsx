function IOCPanel({ log }) {
    if (!log || !log.attack) return null;

    const iocs = [
        { label: "Source IP", value: log.ip },
        { label: "Attack Type", value: log.attack },
        { label: "HTTP Method", value: log.method },
        { label: "Request Path", value: log.path },
        { label: "Status Code", value: log.status },
        { label: "Severity", value: log.severity },
        { label: "Risk Score", value: `${log.risk_score}/100` },
        { label: "User Agent", value: log.user_agent },
    ];

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
                    marginBottom: "20px",
                }}
            >
                🧪 Indicators of Compromise (IOC)
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "15px",
                }}
            >
                {iocs.map((ioc) => (
                    <div
                        key={ioc.label}
                        style={{
                            background: "#f8fafc",
                            borderRadius: "12px",
                            padding: "15px",
                            border: "1px solid #e2e8f0",
                        }}
                    >
                        <div
                            style={{
                                color: "#64748b",
                                fontSize: "13px",
                                marginBottom: "8px",
                            }}
                        >
                            {ioc.label}
                        </div>

                        <div
                            style={{
                                fontWeight: "700",
                                color: "#0f172a",
                                wordBreak: "break-word",
                            }}
                        >
                            {ioc.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IOCPanel;