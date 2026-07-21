function DeveloperCard() {
    return (
        <div
            style={{
                background: "#111827",
                borderRadius: "20px",
                padding: "35px",
                color: "white",
                marginBottom: "50px",
                boxShadow: "0 18px 35px rgba(0,0,0,.25)",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    fontSize: "70px",
                    marginBottom: "20px",
                }}
            >
                👨‍💻
            </div>

            <h2
                style={{
                    marginBottom: "15px",
                }}
            >
                Developed By
            </h2>

            <h1
                style={{
                    color: "#38bdf8",
                    marginBottom: "20px",
                }}
            >
                Shreyash Lange
            </h1>

            <p
                style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                    maxWidth: "700px",
                    margin: "auto",
                }}
            >
                LogLens is a personal Security Software Engineering project
                focused on building a simplified Security Information and Event
                Management (SIEM) dashboard capable of detecting attacks,
                analyzing logs and presenting actionable security insights.
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "30px",
                }}
            >
                <Badge text="React" />
                <Badge text="Flask" />
                <Badge text="Python" />
                <Badge text="Cyber Security" />
            </div>
        </div>
    );
}

function Badge({ text }) {
    return (
        <div
            style={{
                background: "#2563eb",
                padding: "12px 22px",
                borderRadius: "999px",
                fontWeight: "600",
            }}
        >
            {text}
        </div>
    );
}

export default DeveloperCard;