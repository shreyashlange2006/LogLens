import WelcomeBanner from "../components/WelcomeBanner";
import { useState } from "react";
import UploadBox from "../components/UploadBox";
import SummaryCards from "../components/SummaryCards";
import PieChartCard from "../components/PieChartCard";
import TopAttackersChart from "../components/TopAttackersChart";
import AttackTypesChart from "../components/AttackTypesChart";
import LogsTable from "../components/LogsTable";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar";
import ExportButtons from "../components/ExportButtons";
import LiveStatus from "../components/LiveStatus";
import AttackDetails from "../components/AttackDetails";
import SecurityHealth from "../components/SecurityHealth";
import ThreatStats from "../components/ThreatStats";
import ExecutiveSummary from "../components/ExecutiveSummary";
import IOCPanel from "../components/IOCPanel";
import MitreCard from "../components/MitreCard";
import RiskGauge from "../components/RiskGauge";
import IncidentBanner from "../components/IncidentBanner";
import AnalystNotes from "../components/AnalystNotes";
import QuickActions from "../components/QuickActions";
import SystemOverview from "../components/SystemOverview";
import EmptyDashboard from "../components/EmptyDashboard";


function Dashboard() {
    const [result, setResult] = useState(null);
    const [search, setSearch] = useState("");
    const [severityFilter, setSeverityFilter] = useState("All");
    const [selectedLog, setSelectedLog] = useState(null);

    const filteredLogs =
        result?.logs.filter((log) => {
            const matchesSearch = log.ip
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesSeverity =
                severityFilter === "All"
                    ? true
                    : log.severity === severityFilter;

            return matchesSearch && matchesSeverity;
        }) || [];

    return (
        <div
            style={{
                maxWidth: "1450px",
                margin: "30px auto",
                padding: "35px",
                fontFamily: "Segoe UI",
                background:
                    "linear-gradient(180deg,#020617,#0f172a,#111827)",
                minHeight: "100vh",
            }}
        >
            <Navbar />

            <DashboardHeader summary={result?.summary} />

            {!result && <WelcomeBanner />}

            <QuickActions />

            <SystemOverview />

            <LiveStatus
                summary={result?.summary}
                filename={result?.filename}
            />

            {!result ? (
                <>
                    <UploadBox
                        setResult={(data) => {
                            setResult(data);
                            setSelectedLog(null);

                            setTimeout(() => {
                                window.scrollTo({
                                    top: 520,
                                    behavior: "smooth",
                                });
                            }, 300);
                        }}
                    />
                   <EmptyDashboard />                  
                </>
            ) : (
                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "20px",
                        padding: "30px",
                        marginBottom: "35px",
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                        boxShadow:
                            "0 18px 35px rgba(0,0,0,.18)",
                        borderLeft:
                            "6px solid #22c55e",
                    }}
                >
                    <div>
                        <h2
                            style={{
                                color: "#16a34a",
                                marginBottom: "10px",
                            }}
                        >
                            ✅ Analysis Completed
                        </h2>

                        <p
                            style={{
                                color: "#475569",
                                margin: 0,
                                fontSize: "18px",
                            }}
                        >
                            <strong>File:</strong>{" "}
                            {result.filename}
                        </p>

                        <p
                            style={{
                                color: "#64748b",
                                marginTop: "10px",
                            }}
                        >
                            Your security report has
                            been successfully generated.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setResult(null);
                            setSelectedLog(null);

                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        style={{
                            background: "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "14px 30px",
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "17px",
                        }}
                    >
                        📁 Analyze Another File
                    </button>
                </div>
            )}

            {result && (
                <> 
                                    {/* ================= Executive Summary ================= */}

                    <h2
                        style={{
                            color: "white",
                            marginBottom: "20px",
                            fontSize: "30px",
                            fontWeight: "700",
                        }}
                    >
                        📊 Executive Security Summary
                    </h2>
                    <ExecutiveSummary summary={result.summary} />

                    <SummaryCards summary={result.summary} />

                    <SecurityHealth summary={result.summary} />

                    <ThreatStats summary={result.summary} />

                    {/* ================= Threat Analytics ================= */}

                    <h2
                        style={{
                            color: "white",
                            marginTop: "40px",
                            marginBottom: "20px",
                            fontSize: "30px",
                            fontWeight: "700",
                        }}
                    >
                        📈 Threat Analytics
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            marginBottom: "25px",
                        }}
                    >
                        <PieChartCard summary={result.summary} />

                        <TopAttackersChart
                            attackers={result.summary.top_attackers}
                        />
                    </div>

                    <AttackTypesChart
                        attackTypes={result.summary.attack_types}
                    />

                    {/* ================= Log Explorer ================= */}

                    <div
    style={{
        background: "#111827",
        borderRadius: "20px",
        padding: "25px",
        marginTop: "35px",
        marginBottom: "30px",
        boxShadow: "0 15px 30px rgba(0,0,0,.25)",
    }}
>
    <h2
        style={{
            color: "white",
            marginBottom: "20px",
        }}
    >
        🔎 Threat Explorer
    </h2>

    <div
        style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
        }}
    >
        <input
            type="text"
            placeholder="Search by Source IP..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
                flex: 1,
                minWidth: "300px",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                fontSize: "15px",
            }}
        />

        {["All", "Critical", "High", "Low"].map((level) => (
            <button
                key={level}
                onClick={() => setSeverityFilter(level)}
                style={{
                    padding: "12px 22px",
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "600",
                    background:
                        severityFilter === level
                            ? "#2563eb"
                            : "#334155",
                    color: "white",
                    transition: ".25s",
                }}
            >
                {level}
            </button>
        ))}
    </div>
</div>
                     

                    {/* ================= Security Logs ================= */}

                    <h2
                        style={{
                            color: "white",
                            marginTop: "40px",
                            marginBottom: "18px",
                            fontSize: "30px",
                            fontWeight: "700",
                        }}
                    >
                        📋 Security Log Entries
                    </h2>
                     <h2
    style={{
        color: "white",
        marginBottom: "20px",
        marginTop: "35px",
    }}
>
    📋 Security Event Log
</h2>
           <ExportButtons logs={filteredLogs} summary={result.summary}
/>

                    <LogsTable
                        logs={filteredLogs}
                        onSelectLog={setSelectedLog}
                    />

                  {selectedLog ? (
    <>
        <h2
            style={{
                color: "white",
                marginTop: "40px",
                marginBottom: "18px",
                fontSize: "28px",
                fontWeight: "700",
            }}
        >
            🔍 Incident Investigation
        </h2>

        <IncidentBanner log={selectedLog} />

        <AttackDetails log={selectedLog} />

        <IOCPanel log={selectedLog} />

        <MitreCard log={selectedLog} />

        <RiskGauge score={selectedLog.risk_score} />

        <AnalystNotes log={selectedLog} />
    </>
) : (
    <div
        style={{
            background: "#1e293b",
            color: "#cbd5e1",
            padding: "40px",
            marginTop: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 15px 30px rgba(0,0,0,.25)",
        }}
    >
        <div
            style={{
                fontSize: "60px",
                marginBottom: "20px",
            }}
        >
            🔍
        </div>

        <h2
            style={{
                color: "white",
                marginBottom: "15px",
            }}
        >
            Incident Investigation
        </h2>

        <p
            style={{
                fontSize: "17px",
                color: "#94a3b8",
                maxWidth: "650px",
                margin: "0 auto",
                lineHeight: "1.8",
            }}
        >
            Select a suspicious log from the Security Event Log table
            above to begin a detailed forensic investigation.
        </p>
    </div>
)}
                                    </>
            )}

           <footer
    style={{
        marginTop: "60px",
        padding: "35px",
        borderTop: "1px solid #334155",
        textAlign: "center",
        color: "#94a3b8",
    }}
>
    <h2
        style={{
            color: "white",
        }}
    >
        🛡 LogLens v1.0
    </h2>

    <p>Security Log Analysis Platform</p>

    <p>Built with React + Flask + Python</p>

    <p>Developed by Shreyash Lange</p>

    <p
        style={{
            marginTop: "15px",
            fontSize: "13px",
        }}
    >
        © 2026 LogLens. All Rights Reserved.
    </p>
   </footer>
           
        </div>
    );
}

/* ---------- Welcome Feature Card ---------- */

function FeatureCard({ title }) {
    return (
        <div
            style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "15px",
                padding: "18px",
                textAlign: "center",
                fontWeight: "600",
                color: "#0f172a",
                transition: "0.3s",
            }}
        >
            {title}
        </div>
    );
}

/* ---------- Footer Card ---------- */

function FooterCard({ title, value }) {
    return (
        <div
            style={{
                background: "#1e293b",
                borderRadius: "15px",
                padding: "18px 25px",
                minWidth: "200px",
                border: "1px solid #334155",
            }}
        >
            <div
                style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    marginBottom: "8px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "17px",
                }}
            >
                {value}
            </div>
        </div>
    );
}

export default Dashboard;

