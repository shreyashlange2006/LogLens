import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function TopAttackersChart({ attackers }) {
    const data = Object.entries(attackers).map(([ip, count]) => ({
        ip,
        count,
    }));

    return (
        <div
            style={{
                background:"#ffffff",
                borderRadius:"22px",
                padding:"25px",
                boxShadow:"0 18px 35px rgba(0,0,0,.18)"
            }}
        >
            <h2
    style={{
        color: "#0f172a",
        fontWeight: "700",
        fontSize: "24px",
        marginBottom: "20px",
    }}
>
    🔥 Top Attackers
</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="ip" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="count" fill="#ef4444" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TopAttackersChart;