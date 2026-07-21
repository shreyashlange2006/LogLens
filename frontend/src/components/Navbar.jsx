import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const linkStyle = (path) => ({
        color: location.pathname === path ? "#38bdf8" : "white",
        textDecoration: "none",
        fontWeight: "600",
        padding: "10px 18px",
        borderRadius: "10px",
        transition: ".3s",
    });

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#111827",
                padding: "18px 30px",
                borderRadius: "18px",
                marginBottom: "30px",
                boxShadow: "0 12px 25px rgba(0,0,0,.25)",
            }}
        >
            <h2
                style={{
                    margin: 0,
                    color: "white",
                }}
            >
                🛡 LogLens
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "15px",
                }}
            >
                <Link to="/" style={linkStyle("/")}>
                    Dashboard
                </Link>

                <Link to="/about" style={linkStyle("/about")}>
                    About
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;