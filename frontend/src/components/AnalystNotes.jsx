function AnalystNotes({ log }) {
    if (!log || !log.attack) return null;

    const notes = {
        "Brute Force": [
            "Multiple authentication attempts detected.",
            "Repeated requests targeted the login endpoint.",
            "Recommend enabling account lockout and MFA.",
        ],

        "SQL Injection": [
            "Malicious SQL payload identified in request.",
            "Database resources may have been targeted.",
            "Validate user input and use parameterized queries.",
        ],

        "Path Traversal": [
            "Request attempted unauthorized file access.",
            "Sensitive system files may have been targeted.",
            "Validate file paths and restrict filesystem access.",
        ],

        "XSS": [
            "Script payload detected in user input.",
            "Possible client-side code execution attempt.",
            "Escape HTML output and implement CSP.",
        ],
    };

    const analystNotes = notes[log.attack] || [
        "No suspicious activity requiring analyst action.",
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
                📝 Analyst Notes
            </h2>

            <div
                style={{
                    background: "#f8fafc",
                    borderRadius: "15px",
                    padding: "20px",
                    borderLeft: "5px solid #2563eb",
                }}
            >
                {analystNotes.map((note, index) => (
                    <p
                        key={index}
                        style={{
                            margin: "10px 0",
                            color: "#334155",
                            lineHeight: "1.8",
                        }}
                    >
                        • {note}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AnalystNotes;