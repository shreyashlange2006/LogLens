import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function AttackTypesChart({ attackTypes }) {

    const data = Object.entries(attackTypes).map(([attack, count]) => ({
        attack,
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

                    <XAxis dataKey="attack" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="count" fill="#2563eb" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AttackTypesChart;