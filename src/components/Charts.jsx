import { transactions } from "../data/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Charts = () => {
  // Line chart data (by date)
  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  // Pie chart data (category-wise expenses)
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Analytics</h2>

      <div style={{ display: "flex", gap: "40px" }}>
        
        {/* Line Chart */}
        <LineChart width={300} height={200} data={lineData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>

        {/* Pie Chart */}
        <PieChart width={300} height={200}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

      </div>
    </div>
  );
};

export default Charts;