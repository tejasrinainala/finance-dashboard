import { transactions } from "../data/mockData";

const SummaryCards = () => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <div style={cardStyle}>
        <h3>Balance</h3>
        <p>₹ {balance}</p>
      </div>

      <div style={cardStyle}>
        <h3>Income</h3>
        <p>₹ {income}</p>
      </div>

      <div style={cardStyle}>
        <h3>Expenses</h3>
        <p>₹ {expenses}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
};

export default SummaryCards;