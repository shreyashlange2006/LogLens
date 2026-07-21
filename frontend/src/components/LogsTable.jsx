function LogsTable({
    logs,
    onSelectLog,
    selectedLog,
})
 {
    return (
        <div
            style={{
                background: "#ffffff",
                padding: "25px",
                borderRadius: "20px",
                marginTop: "30px",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
                overflowX: "auto",
            }}
        >
            <h2
                style={{
                    color: "#0f172a",
                    fontWeight: "700",
                    fontSize: "24px",
                    marginBottom: "20px",
                }}
            >
                📋 Security Log Entries
            </h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <thead>
                    <tr
                        style={{
                            background: "#0f172a",
                            color: "white",
                        }}
                    >
                        <th style={headerStyle}>IP Address</th>
                        <th style={headerStyle}>Method</th>
                        <th style={headerStyle}>Path</th>
                        <th style={headerStyle}>Status</th>
                        <th style={headerStyle}>Attack</th>
                        <th style={headerStyle}>Severity</th>
                        <th style={headerStyle}>Risk</th>
                    </tr>
                </thead>

                <tbody>
                    {logs.map((log, index) => (
                        <tr
                            key={index}
                            onClick={() => onSelectLog(log)}
                           
                          style={{
    background:
        selectedLog?.ip === log.ip &&
        selectedLog?.timestamp === log.timestamp
            ? "#dbeafe"
            : index % 2 === 0
            ? "#ffffff"
            : "#f8fafc",

    cursor: "pointer",

    transition: "0.25s",

    borderLeft:
        selectedLog?.ip === log.ip &&
        selectedLog?.timestamp === log.timestamp
            ? "5px solid #2563eb"
            : "5px solid transparent",
}}

                        >
                            <td style={cellStyle}>{log.ip}</td>

                            <td style={cellStyle}>{log.method}</td>

                            <td
                                style={{
                                    ...cellStyle,
                                    maxWidth: "260px",
                                    wordBreak: "break-word",
                                }}
                            >
                                {log.path}
                            </td>

                            <td style={cellStyle}>
                                <span
                                    style={{
                                        padding: "6px 12px",
                                        borderRadius: "20px",
                                        color: "white",
                                        fontWeight: "bold",
                                        background:
                                            log.status >= 400
                                                ? "#ef4444"
                                                : "#22c55e",
                                    }}
                                >
                                    {log.status}
                                </span>
                            </td>

                            <td
    style={{
        ...cellStyle,
        minWidth: "180px",
    }}
>
    <span
        style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "999px",
            fontWeight: "bold",
            color: "white",
            background: log.attack ? "#dc2626" : "#16a34a",
            whiteSpace: "nowrap",
            fontSize: "14px",
        }}
    >
        {log.attack || "Normal"}
    </span>
</td>

                            <td style={cellStyle}>
                                <span
                                    style={{
                                        padding: "5px 10px",
                                        borderRadius: "999px",
                                        color: "white",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        background:
                                            log.severity === "Critical"
                                                ? "#dc2626"
                                                : log.severity === "High"
                                                ? "#ea580c"
                                                : "#16a34a",
                                    }}
                                >
                                    {log.severity}
                                </span>
                            </td>

                            <td
                                style={{
                                    ...cellStyle,
                                    minWidth: "180px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <div
                                        style={{
                                            flex: 1,
                                            height: "10px",
                                            background: "#e5e7eb",
                                            borderRadius: "999px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${log.risk_score}%`,
                                                height: "100%",
                                                background:
                                                    log.risk_score >= 90
                                                        ? "#dc2626"
                                                        : log.risk_score >= 70
                                                        ? "#ea580c"
                                                        : log.risk_score >= 40
                                                        ? "#eab308"
                                                        : "#16a34a",
                                                borderRadius: "999px",
                                                transition: "width .3s ease",
                                            }}
                                        />
                                    </div>

                                    <span
                                        style={{
                                            minWidth: "45px",
                                            fontWeight: "700",
                                            color: "#111827",
                                        }}
                                    >
                                        {log.risk_score}%
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const headerStyle = {
    padding: "16px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "700",
};

const cellStyle = {
    padding: "15px",
    textAlign: "center",
    borderBottom: "1px solid #e5e7eb",
};

export default LogsTable;