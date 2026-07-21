function EmptyDashboard() {
    return (
        <div
            style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "60px",
                textAlign: "center",
                boxShadow: "0 18px 35px rgba(0,0,0,.18)",
                marginTop: "25px",
            }}
        >
            <div
                style={{
                    fontSize: "80px",
                    marginBottom: "20px",
                }}
            >
                🛡️
            </div>

            <h2
                style={{
                    color: "#0f172a",
                    marginBottom: "15px",
                }}
            >
                Ready to Analyze Security Logs
            </h2>

            <p
                style={{
                    color: "#64748b",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                    fontSize: "17px",
                }}
            >
                Upload an Apache, Nginx or Common Log Format (.log) file to
                detect cyber attacks, calculate risk scores, generate incident
                reports, and visualize security analytics.
            </p>

            <div
                style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                }}
            >
                <Badge text="Threat Detection" />
                <Badge text="Risk Analysis" />
                <Badge text="MITRE ATT&CK" />
                <Badge text="Dashboard" />
            </div>
        </div>
    );
}

function Badge({ text }) {
    return (
        <div
            style={{
                background: "#2563eb",
                color: "white",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "14px",
            }}
        >
            {text}
        </div>
    );
}

export default EmptyDashboard;