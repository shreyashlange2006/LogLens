import { useState } from "react";
import api from "../services/api";
import LoadingOverlay from "./LoadingOverlay";

function UploadBox({ setResult }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [filename, setFilename] = useState("");
    
    const uploadFile = async () => {
        if (!file) {
            alert("Please select a .log file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);

            const response = await api.post("/upload", formData);

            setResult(response.data);

            setFilename(file.name);
            setUploaded(true);
        } catch (error) {
            console.error(error);
            alert("Upload failed.");
        } finally {
            setLoading(false);
        }
    };

    const analyzeAnother = () => {
        setUploaded(false);
        setFilename("");
        setFile(null);
        setResult(null);
    };

    if (uploaded) {
        return (
            <>
                <LoadingOverlay loading={loading} />

                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "20px",
                        padding: "30px",
                        marginBottom: "35px",
                        boxShadow: "0 18px 35px rgba(0,0,0,.18)",
                        borderLeft: "6px solid #22c55e",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                        }}
                    >
                        <div>
                            <h2
                                style={{
                                    color: "#16a34a",
                                    marginBottom: "10px",
                                }}
                            >
                                ✅ Analysis Complete
                            </h2>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#475569",
                                }}
                            >
                                <strong>Uploaded File:</strong> {filename}
                            </p>

                            <p
                                style={{
                                    marginTop: "8px",
                                    color: "#64748b",
                                }}
                            >
                                Dashboard successfully generated.
                            </p>
                        </div>

                        <button
                            onClick={analyzeAnother}
                            style={{
                                background: "#2563eb",
                                color: "white",
                                border: "none",
                                padding: "12px 22px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: "15px",
                            }}
                        >
                            📁 Analyze Another File
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <LoadingOverlay loading={loading} />

            <div
                style={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "40px",
                    marginBottom: "35px",
                    textAlign: "center",
                    boxShadow: "0 15px 35px rgba(0,0,0,.18)",
                    border: "2px dashed #3b82f6",
                }}
            >
                <div
                    style={{
                        fontSize: "60px",
                        marginBottom: "10px",
                    }}
                >
                    📤
                </div>

                <h2
                    style={{
                        marginBottom: "10px",
                        color: "#0f172a",
                    }}
                >
                    Upload Security Log
                </h2>

                <p
                    style={{
                        color: "#64748b",
                        marginBottom: "25px",
                    }}
                >
                    Upload Apache, Nginx or Common Log Format (.log) files for
                    security analysis.
                </p>

                <input
                    type="file"
                    accept=".log"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                {file && (
                    <div
                        style={{
                            marginTop: "15px",
                            color: "#2563eb",
                            fontWeight: "600",
                        }}
                    >
                        📄 {file.name}
                    </div>
                )}

                <div
                    style={{
                        marginTop: "25px",
                    }}
                >
                    <button
                        onClick={uploadFile}
                        disabled={loading}
                        style={{
                            background: loading ? "#94a3b8" : "#2563eb",
                            color: "white",
                            border: "none",
                            padding: "14px 40px",
                            borderRadius: "12px",
                            cursor: loading ? "not-allowed" : "pointer",
                            fontWeight: "bold",
                            fontSize: "16px",
                            transition: ".3s",
                        }}
                    >
                        {loading ? "🔄 Analyzing..." : "🚀 Analyze Log"}
                    </button>
                </div>

                <p
                    style={{
                        marginTop: "25px",
                        color: "#94a3b8",
                        fontSize: "14px",
                    }}
                >
                    ✔ Supported Formats: Apache • Nginx • Common Log Format (.log)
                </p>
            </div>
        </>
    );
}

export default UploadBox;