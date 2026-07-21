function ProjectStats() {
    const stats = [
        ["⚛ Frontend", "React"],
        ["🐍 Backend", "Flask"],
        ["📊 Charts", "Recharts"],
        ["🛡 Attack Types", "4+"],
        ["📄 Log Format", "Apache / Nginx / CLF"],
        ["🎯 Risk Engine", "100%"],
    ];

    return (
        <div
            style={{
                marginBottom: "50px",
            }}
        >
            <h2
                style={{
                    color: "white",
                    marginBottom: "25px",
                    fontSize: "34px",
                }}
            >
                📈 Project Statistics
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "20px",
                }}
            >
                {stats.map(([title, value]) => (
                    <div
                        key={title}
                        style={{
                            background: "#111827",
                            color: "white",
                            padding: "25px",
                            borderRadius: "18px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                color: "#94a3b8",
                                marginBottom: "10px",
                            }}
                        >
                            {title}
                        </div>

                        <div
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                color: "#38bdf8",
                            }}
                        >
                            {value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectStats;