function QuickActions() {
    const actions = [
        {
            icon: "📁",
            title: "Upload Logs",
            text: "Analyze a new log file",
        },
        {
            icon: "📊",
            title: "Dashboard",
            text: "View security analytics",
        },
        {
            icon: "🔍",
            title: "Investigate",
            text: "Inspect incidents",
        },
        {
            icon: "📤",
            title: "Export",
            text: "Download reports",
        },
    ];

    return (
        <div style={{ marginBottom: "35px" }}>
            <h2
                style={{
                    color: "white",
                    marginBottom: "20px",
                }}
            >
                ⚡ Quick Actions
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(220px,1fr))",
                    gap: "20px",
                }}
            >
                {actions.map((action) => (
                    <div
                        key={action.title}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-6px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                        }}
                        style={{
                            background: "#ffffff",
                            padding: "25px",
                            borderRadius: "18px",
                            transition: ".25s",
                            cursor: "pointer",
                            boxShadow:
                                "0 18px 35px rgba(0,0,0,.18)",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "40px",
                                marginBottom: "15px",
                            }}
                        >
                            {action.icon}
                        </div>

                        <h3>{action.title}</h3>

                        <p
                            style={{
                                color: "#64748b",
                            }}
                        >
                            {action.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuickActions;