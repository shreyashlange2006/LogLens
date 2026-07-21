const stack = [
    "React",
    "JavaScript",
    "Flask",
    "Python",
    "Axios",
    "Recharts",
    "Regex",
    "REST API",
    "HTML5",
    "CSS3",
];

function TechStack() {
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
                ⚙ Technology Stack
            </h2>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "18px",
                }}
            >
                {stack.map((item) => (
                    <div
                        key={item}
                        style={{
                            background: "#2563eb",
                            color: "white",
                            padding: "14px 24px",
                            borderRadius: "999px",
                            fontWeight: "600",
                            boxShadow:
                                "0 10px 20px rgba(37,99,235,.3)",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;