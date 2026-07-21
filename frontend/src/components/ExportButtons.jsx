import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ExportButtons({ logs, summary }) {

    const downloadFile = (content, filename, type) => {
        const blob = new Blob([content], { type });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    };

    // ============================
    // CSV EXPORT
    // ============================

    const exportCSV = () => {

        if (!logs || logs.length === 0) {
            alert("No logs available.");
            return;
        }

        const headers = [
            "IP",
            "Method",
            "Path",
            "Status",
            "Attack",
            "Severity",
            "Risk Score",
            "Timestamp",
        ];

        const rows = logs.map((log) => [
            log.ip,
            log.method,
            log.path,
            log.status,
            log.attack || "Normal",
            log.severity,
            log.risk_score ?? "-",
            log.timestamp,
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map((row) => row.join(",")),
        ].join("\n");

        downloadFile(
            csvContent,
            "LogLens_Report.csv",
            "text/csv;charset=utf-8;"
        );
    };

    // ============================
    // JSON EXPORT
    // ============================

    const exportJSON = () => {

        if (!logs || logs.length === 0) {
            alert("No logs available.");
            return;
        }

        const report = {

            generated_at: new Date().toLocaleString(),

            summary,

            logs,
        };

        downloadFile(
            JSON.stringify(report, null, 4),
            "LogLens_Report.json",
            "application/json"
        );
    };

    // ============================
    // PDF EXPORT
    // ============================

    const exportPDF = () => {

        if (!logs || logs.length === 0) {
            alert("No logs available.");
            return;
        }

        const doc = new jsPDF();

        doc.setFontSize(22);

        doc.setTextColor(25, 45, 120);

        doc.text("LogLens Security Report", 14, 20);

        doc.setFontSize(11);

        doc.setTextColor(80);

        doc.text(
            `Generated : ${new Date().toLocaleString()}`,
            14,
            30
        );

        doc.line(14, 35, 195, 35);

        doc.setFontSize(16);

        doc.setTextColor(0);

        doc.text("Executive Summary", 14, 45);

        doc.setFontSize(12);

        doc.text(
            `Total Logs : ${summary.total_logs}`,
            18,
            55
        );

        doc.text(
            `Threats Detected : ${summary.attacks}`,
            18,
            63
        );

        doc.text(
            `Normal Logs : ${summary.normal_logs}`,
            18,
            71
        );

        doc.text(
            `Average Risk : ${summary.average_risk}`,
            18,
            79
        );

                // ============================
        // Attack Types
        // ============================

        let y = 95;

        doc.setFontSize(16);
        doc.text("Attack Types", 14, y);

        y += 10;

        Object.entries(summary.attack_types).forEach(
            ([attack, count]) => {
                doc.setFontSize(12);

                doc.text(
                    `${attack} : ${count}`,
                    18,
                    y
                );

                y += 8;
            }
        );

        // ============================
        // Top Attackers
        // ============================

        y += 8;

        doc.setFontSize(16);
        doc.text("Top Attackers", 14, y);

        y += 10;

        Object.entries(summary.top_attackers).forEach(
            ([ip, count]) => {
                doc.setFontSize(12);

                doc.text(
                    `${ip} (${count} attacks)`,
                    18,
                    y
                );

                y += 8;
            }
        );

        y += 10;

        // ============================
        // Detailed Log Table
        // ============================

        autoTable(doc, {
            startY: y,

            head: [[
                "IP",
                "Attack",
                "Severity",
                "Risk",
                "Status"
            ]],

            body: logs.map((log) => [
                log.ip,
                log.attack || "Normal",
                log.severity,
                log.risk_score,
                log.status,
            ]),

            styles: {
                fontSize: 9,
            },

            headStyles: {
                fillColor: [37, 99, 235],
            },
        });

        doc.save("LogLens_Report.pdf");
    };
        return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
                marginBottom: "20px",
                flexWrap: "wrap",
            }}
        >
            <button
                onClick={exportCSV}
                style={buttonStyle("#2563eb")}
            >
                📄 Export CSV
            </button>

            <button
                onClick={exportJSON}
                style={buttonStyle("#16a34a")}
            >
                📦 Export JSON
            </button>

            <button
                onClick={exportPDF}
                style={buttonStyle("#dc2626")}
            >
                🖨 Export PDF
            </button>
        </div>
    );
}

function buttonStyle(color) {
    return {
        background: color,
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "15px",
    };
}

export default ExportButtons;