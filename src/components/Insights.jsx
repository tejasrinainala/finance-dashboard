import { transactions } from "../data/mockData";

const Insights = () => {
  // Highest spending category
  const expenseMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;

  for (let category in expenseMap) {
    if (expenseMap[category] > maxAmount) {
      maxAmount = expenseMap[category];
      maxCategory = category;
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Insights</h2>

      <div style={cardStyle}>
        <p>
          🥇 Highest Spending Category: <strong>{maxCategory}</strong>
        </p>
        <p>Amount: ₹ {maxAmount}</p>
      </div>

      <div style={cardStyle}>
        <p>📊 Total Transactions: {transactions.length}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "10px",
};

export default Insights;