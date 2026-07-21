const roadmap = [
    "Real-time Log Monitoring",
    "Live Alert Notifications",
    "Machine Learning Threat Detection",
    "User Authentication",
    "Dark / Light Themes",
    "Cloud Deployment",
];

function Roadmap() {
    return (
        <div
            style={{
                background: "#111827",
                borderRadius: "20px",
                padding: "35px",
                color: "white",
                marginBottom: "50px",
            }}
        >
            <h2
                style={{
                    marginBottom: "25px",
                }}
            >
                🚀 Future Roadmap
            </h2>

            {roadmap.map((item) => (
                <div
                    key={item}
                    style={{
                        padding: "15px 0",
                        borderBottom: "1px solid #334155",
                        fontSize: "18px",
                    }}
                >
                    ✅ {item}
                </div>
            ))}
        </div>
    );
}

export default Roadmap;