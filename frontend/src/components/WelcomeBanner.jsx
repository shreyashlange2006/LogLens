function WelcomeBanner() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(135deg,#1d4ed8,#2563eb,#0f172a)",
                color: "white",
                padding: "35px",
                borderRadius: "22px",
                marginBottom: "30px",
                boxShadow: "0 18px 35px rgba(0,0,0,.25)",
            }}
        >
            <h2
                style={{
                    margin: 0,
                    fontSize: "32px",
                }}
            >
                👋 Welcome to LogLens
            </h2>

            <p
                style={{
                    marginTop: "15px",
                    color: "#dbeafe",
                    lineHeight: "1.8",
                    fontSize: "17px",
                }}
            >
                Upload a security log to analyze suspicious activity, detect
                known attack signatures, calculate risk scores, and investigate
                incidents through an interactive SOC-style dashboard.
            </p>

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "25px",
                    flexWrap: "wrap",
                }}
            >
                <Badge text="Apache" />
                <Badge text="Nginx" />
                <Badge text="Common Log Format" />
                <Badge text="Threat Detection" />
                <Badge text="MITRE ATT&CK" />
            </div>
        </div>
    );
}

function Badge({ text }) {
    return (
        <div
            style={{
                background: "rgba(255,255,255,.15)",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: "600",
            }}
        >
            {text}
        </div>
    );
}

export default WelcomeBanner;