function ArchitectureDiagram() {
    const steps = [
        "📁 Upload Log",
        "⚙ Flask API",
        "📄 Parser",
        "🛡 Detection Engine",
        "🎯 Risk Score",
        "📊 Dashboard",
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
                🏗 System Architecture
            </h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                }}
            >
                {steps.map((step, index) => (
                    <div
                        key={step}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        <div
                            style={{
                                background: "#111827",
                                color: "white",
                                padding: "20px",
                                borderRadius: "15px",
                                minWidth: "170px",
                                textAlign: "center",
                            }}
                        >
                            {step}
                        </div>

                        {index !== steps.length - 1 && (
                            <div
                                style={{
                                    color: "#38bdf8",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                }}
                            >
                                →
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArchitectureDiagram;