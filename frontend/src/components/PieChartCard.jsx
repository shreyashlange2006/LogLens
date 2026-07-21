import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

function PieChartCard({ summary }) {

    if (!summary) return null;

    const data = [
        {
            name: "Attacks",
            value: summary.attacks
        },
        {
            name: "Normal",
            value: summary.normal_logs
        }
    ];

    const COLORS = ["#ef4444", "#22c55e"];

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
    📊 Attack Overview
</h2>

            <PieChart width={420} height={300}>

                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                >

                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index]}
                        />
                    ))}

                </Pie>

                <Tooltip />

                <Legend />

            </PieChart>

        </div>
    );
}

export default PieChartCard;
