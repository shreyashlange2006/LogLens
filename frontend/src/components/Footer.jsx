function Footer() {
    return (
        <footer
            style={{
                marginTop: "60px",
                padding: "30px 20px",
                textAlign: "center",
                borderTop: "1px solid rgba(255,255,255,.08)",
                color: "#94a3b8",
                fontSize: "15px",
            }}
        >
            <h3
                style={{
                    color: "#e2e8f0",
                    marginBottom: "10px",
                }}
            >
                🛡 LogLens
            </h3>

            <p
                style={{
                    marginBottom: "18px",
                }}
            >
                Security Log Analysis Dashboard
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                }}
            >
                <span>Apache</span>
                <span>Nginx</span>
                <span>Common Log Format</span>
                <span>Threat Detection</span>
                <span>MITRE ATT&CK</span>
            </div>

            <p
                style={{
                    fontSize: "13px",
                    color: "#64748b",
                }}
            >
                © 2026 LogLens • Built for educational and security analysis purposes.
            </p>
        </footer>
    );
}

export default Footer;