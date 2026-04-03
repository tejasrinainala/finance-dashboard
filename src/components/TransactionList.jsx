import { useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

const TransactionList = ({ role }) => {
  // ✅ Load from localStorage or fallback
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // ✅ Form state
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(data));
  }, [data]);

  // ✅ Filtering
  const filteredData = data
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      typeFilter === "all" ? true : t.type === typeFilter
    );

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Transactions</h2>

      {/* ✅ Admin Button */}
      {role === "admin" && (
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => setShowForm(!showForm)}
        >
          + Add Transaction
        </button>
      )}

      {/* ✅ Form */}
      {showForm && (
        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={() => {
              if (!amount || !category) return;

              const newTransaction = {
                id: Date.now(),
                date: new Date().toISOString().split("T")[0],
                amount: Number(amount),
                category,
                type,
              };

              setData([newTransaction, ...data]);

              // reset form
              setAmount("");
              setCategory("");
              setType("expense");
              setShowForm(false);
            }}
          >
            Add
          </button>
        </div>
      )}

      {/* ✅ Search + Filter */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* ✅ List */}
      {filteredData.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filteredData.map((t) => (
          <div key={t.id} style={cardStyle}>
            <p><strong>{t.category}</strong></p>
            <p>₹ {t.amount}</p>
            <p>{t.date}</p>
            <p>{t.type}</p>
          </div>
        ))
      )}
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
};

export default TransactionList;