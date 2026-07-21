function HeroSection() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(135deg,#1e3a8a,#2563eb,#0f172a)",
                borderRadius: "25px",
                padding: "70px 40px",
                color: "white",
                textAlign: "center",
                marginBottom: "40px",
                boxShadow: "0 20px 40px rgba(0,0,0,.30)",
            }}
        >
            <div
                style={{
                    fontSize: "70px",
                    marginBottom: "20px",
                }}
            >
                🛡
            </div>

            <h1
                style={{
                    fontSize: "52px",
                    marginBottom: "20px",
                }}
            >
                LogLens
            </h1>

            <p
                style={{
                    maxWidth: "850px",
                    margin: "0 auto",
                    fontSize: "20px",
                    lineHeight: "1.9",
                    color: "#dbeafe",
                }}
            >
                A modern Security Log Analysis platform capable of parsing
                Apache, Nginx and Common Log Format logs, detecting cyber
                attacks, calculating risk scores and presenting actionable
                threat intelligence through an interactive SOC dashboard.
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "35px",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        background: "rgba(255,255,255,.15)",
                        padding: "12px 24px",
                        borderRadius: "999px",
                    }}
                >
                    React
                </div>

                <div
                    style={{
                        background: "rgba(255,255,255,.15)",
                        padding: "12px 24px",
                        borderRadius: "999px",
                    }}
                >
                    Flask
                </div>

                <div
                    style={{
                        background: "rgba(255,255,255,.15)",
                        padding: "12px 24px",
                        borderRadius: "999px",
                    }}
                >
                    Python
                </div>

                <div
                    style={{
                        background: "rgba(255,255,255,.15)",
                        padding: "12px 24px",
                        borderRadius: "999px",
                    }}
                >
                    Security Analytics
                </div>
            </div>
        </div>
    );
}

export default HeroSection;