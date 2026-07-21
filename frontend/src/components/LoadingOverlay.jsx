import { useEffect, useState } from "react";

function LoadingOverlay({ loading }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!loading) {
            setProgress(0);
            return;
        }

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(timer);
    }, [loading]);

    if (!loading) return null;

    let status = "Initializing Analysis...";

    if (progress >= 20)
        status = "Parsing Security Logs...";

    if (progress >= 40)
        status = "Detecting Attack Signatures...";

    if (progress >= 60)
        status = "Calculating Risk Scores...";

    if (progress >= 80)
        status = "Generating Dashboard...";

    if (progress >= 95)
        status = "Almost Finished...";

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(2,6,23,.82)",
                backdropFilter: "blur(6px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    width: "470px",
                    background: "#111827",
                    borderRadius: "25px",
                    padding: "45px",
                    textAlign: "center",
                    color: "white",
                    boxShadow:
                        "0 30px 60px rgba(0,0,0,.45)",
                }}
            >
                <div
                    style={{
                        fontSize: "75px",
                        marginBottom: "15px",
                    }}
                >
                    🛡
                </div>

                <h2
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    LogLens Analysis Engine
                </h2>

                <p
                    style={{
                        color: "#94a3b8",
                        marginBottom: "30px",
                    }}
                >
                    Processing uploaded security logs...
                </p>

                <div
                    style={{
                        width: "100%",
                        height: "14px",
                        background: "#334155",
                        borderRadius: "999px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: "100%",
                            background:
                                "linear-gradient(90deg,#2563eb,#38bdf8)",
                            transition: "width .2s",
                        }}
                    />
                </div>

                <div
                    style={{
                        marginTop: "15px",
                        fontWeight: "bold",
                        fontSize: "22px",
                        color: "#38bdf8",
                    }}
                >
                    {progress}%
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        color: "#e2e8f0",
                        fontSize: "16px",
                    }}
                >
                    {status}
                </div>

                <div
                    style={{
                        marginTop: "30px",
                        textAlign: "left",
                        lineHeight: "2",
                        color: "#cbd5e1",
                    }}
                >
                    {progress >= 20 ? "✅" : "⏳"} Parsing Logs

                    <br />

                    {progress >= 40 ? "✅" : "⏳"} Detecting Threats

                    <br />

                    {progress >= 60 ? "✅" : "⏳"} Calculating Risk

                    <br />

                    {progress >= 80 ? "✅" : "⏳"} Building Dashboard
                </div>
            </div>
        </div>
    );
}

export default LoadingOverlay;