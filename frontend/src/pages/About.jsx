import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import TechStack from "../components/TechStack";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import DeveloperCard from "../components/DeveloperCard";
import ProjectStats from "../components/ProjectStats";
import Roadmap from "../components/Roadmap";

function About() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(180deg,#020617,#0f172a,#111827)",
                minHeight: "100vh",
                padding: "30px",
                fontFamily: "Segoe UI",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "auto",
                }}
            >
                <Navbar />

                <HeroSection />

                <FeatureCards />

                <TechStack />

                <ArchitectureDiagram />

                <ProjectStats />

                <DeveloperCard />

                <Roadmap />

                <footer
    style={{
        marginTop: "70px",
        padding: "40px 20px",
        borderTop: "1px solid #334155",
        textAlign: "center",
        color: "#94a3b8",
    }}
>
    <h2
        style={{
            color: "white",
            marginBottom: "12px",
        }}
    >
        🛡 LogLens v1.0
    </h2>

    <p>AI-Powered Security Log Analysis Platform</p>

    <p>Built with React • Flask • Python</p>

    <p>Developed by Shreyash Lange</p>

    <p
        style={{
            marginTop: "15px",
            fontSize: "13px",
            color: "#64748b",
        }}
    >
        © 2026 LogLens. All Rights Reserved.
    </p>
</footer>
            </div>
        </div>
    );
}

export default About;