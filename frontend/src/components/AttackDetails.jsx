import threatInfo from "../data/threatInfo";

function AttackDetails({ log }) {
    if (!log) return null;

    const info = threatInfo[log.attack];

    const recommendations = {
        "Brute Force":
            "Enable account lockout, rate limiting and multi-factor authentication (MFA).",

        "SQL Injection":
            "Use parameterized SQL queries, validate user input and deploy a Web Application Firewall (WAF).",

        "Path Traversal":
            "Restrict file system access, sanitize file paths and enforce least-privilege permissions.",

        XSS:
            "Escape HTML output, validate user input and implement a Content Security Policy (CSP).",
    };

    const timeline = [
        {
            time: log.timestamp,
            event: "📥 Request Received",
        },
        {
            time: log.timestamp,
            event: "🔍 Log Successfully Parsed",
        },
        {
            time: log.timestamp,
            event: log.attack
                ? `🚨 ${log.attack} Signature Detected`
                : "✅ Legitimate Request",
        },
        {
            time: log.timestamp,
            event: `🎯 Risk Score Calculated (${log.risk_score}%)`,
        },
        {
            time: log.timestamp,
            event: log.attack
                ? "🛡 Incident Added to Dashboard"
                : "📄 Stored as Normal Traffic",
        },
    ];

    const getThreatColor = () => {
        if (log.risk_score >= 90) return "#dc2626";
        if (log.risk_score >= 70) return "#ea580c";
        if (log.risk_score >= 40) return "#eab308";
        return "#16a34a";
    };

    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                marginTop: "35px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
            }}
        >
            <h2
                style={{
                    marginBottom: "25px",
                    color: "#0f172a",
                }}
            >
                🔍 Threat Investigation Report
            </h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "15px",
                    marginBottom: "25px",
                    padding: "18px",
                    background: "#f8fafc",
                    borderRadius: "15px",
                    border: "1px solid #e2e8f0",
                }}
            >
                <div>
                    <strong>Report ID</strong>
                    <br />
                    INC-{log.ip.replace(/\./g, "")}
                </div>

                <div>
                    <strong>Status</strong>
                    <br />
                    {log.attack
                        ? "Open Investigation"
                        : "Normal Traffic"}
                </div>

                <div>
                    <strong>Analyst</strong>
                    <br />
                    LogLens AI Engine
                </div>
            </div>

            <div
                style={{
                    background: getThreatColor(),
                    color: "white",
                    padding: "20px",
                    borderRadius: "15px",
                    marginBottom: "25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <div
                        style={{
                            opacity: 0.9,
                            fontSize: "14px",
                        }}
                    >
                        Threat Level
                    </div>

                    <div
                        style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                        }}
                    >
                        {log.severity}
                    </div>
                </div>

                <div style={{ textAlign: "right" }}>
                    <div>Risk Score</div>

                    <div
                        style={{
                            fontSize: "34px",
                            fontWeight: "bold",
                        }}
                    >
                        {log.risk_score}%
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginBottom: "30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                    }}
                >
                    <span
                        style={{
                            fontWeight: "600",
                        }}
                    >
                        Detection Confidence
                    </span>

                    <strong
                        style={{
                            color: getThreatColor(),
                        }}
                    >
                        {log.risk_score}%
                    </strong>
                </div>

                <div
                    style={{
                        height: "12px",
                        background: "#e5e7eb",
                        borderRadius: "999px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            width: `${log.risk_score}%`,
                            height: "100%",
                            background: getThreatColor(),
                        }}
                    />
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "20px",
                }}
            >
                <Info title="🌐 Source IP" value={log.ip} />
                <Info title="⚠ Attack Type" value={log.attack || "Normal"} />
                <Info title="🚨 Severity" value={log.severity} />
                <Info title="🎯 Risk Score" value={`${log.risk_score}%`} />
                <Info title="📨 HTTP Method" value={log.method} />
                <Info title="📂 Request Path" value={log.path} />
                <Info title="📡 Status Code" value={log.status} />
                <Info title="🕒 Timestamp" value={log.timestamp} />
                <Info title="💻 User Agent" value={log.user_agent} />
            </div>

                     {/* Threat Intelligence */}

            {info && (
                <div
                    style={{
                        marginTop: "30px",
                        background: "#f8fafc",
                        padding: "20px",
                        borderRadius: "15px",
                        borderLeft: "5px solid #7c3aed",
                    }}
                >
                    <h3
                        style={{
                            color: "#7c3aed",
                            marginBottom: "20px",
                        }}
                    >
                        🧠 Threat Intelligence
                    </h3>

                    <Info
                        title="Description"
                        value={info.description}
                    />

                    <Info
                        title="Typical Target"
                        value={info.target}
                    />

                    <Info
                        title="Possible Impact"
                        value={info.impact}
                    />

                    <Info
                        title="MITRE ATT&CK"
                        value={info.mitre}
                    />

                    <Info
                        title="OWASP"
                        value={info.owasp}
                    />
                </div>
            )}

            {/* Recommended Mitigation */}

            <div
                style={{
                    marginTop: "30px",
                    background: "#f8fafc",
                    padding: "20px",
                    borderRadius: "15px",
                    borderLeft: "5px solid #2563eb",
                }}
            >
                <h3
                    style={{
                        marginBottom: "15px",
                        color: "#0f172a",
                    }}
                >
                    🛡 Incident Response Recommendation
                </h3>

                <p
                    style={{
                        lineHeight: "1.8",
                        color: "#334155",
                    }}
                >
                    {recommendations[log.attack] ||
                        "No mitigation required. This request appears to be legitimate."}
                </p>
            </div>

            {/* Incident Timeline */}

            <div
                style={{
                    marginTop: "35px",
                    background: "#ffffff",
                    borderRadius: "15px",
                    border: "1px solid #e2e8f0",
                    padding: "25px",
                }}
            >
                <h3
                    style={{
                        marginBottom: "20px",
                        color: "#0f172a",
                    }}
                >
                    🕒 Incident Timeline
                </h3>

                {timeline.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                            marginBottom: "18px",
                        }}
                    >
                        <div
                            style={{
                                width: "180px",
                                color: "#64748b",
                                fontWeight: "600",
                                fontSize: "13px",
                            }}
                        >
                            {item.time}
                        </div>

                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#2563eb",
                            }}
                        />

                        <div
                            style={{
                                fontWeight: "600",
                                color: "#0f172a",
                            }}
                        >
                            {item.event}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Info({ title, value }) {
    return (
        <div
            style={{
                background: "#f8fafc",
                padding: "18px",
                borderRadius: "15px",
                border: "1px solid #e2e8f0",
            }}
        >
            <div
                style={{
                    fontSize: "13px",
                    color: "#64748b",
                    marginBottom: "8px",
                    fontWeight: "600",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    fontWeight: "700",
                    color: "#0f172a",
                    wordBreak: "break-word",
                }}
            >
                {value}
            </div>
        </div>
    );
}

export default AttackDetails;