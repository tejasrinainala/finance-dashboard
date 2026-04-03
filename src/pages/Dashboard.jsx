import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";
import Charts from "../components/Charts";
import Insights from "../components/Insights";
import { useState } from "react";
import RoleSwitcher from "../components/RoleSwitcher";

const Dashboard = () => {
    const [role, setRole] = useState("viewer");
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
  <h1>Finance Dashboard</h1>

  <RoleSwitcher role={role} setRole={setRole} />

  <SummaryCards />
  <Charts />
  <Insights />
  <TransactionList role={role} />
</div>
  );
};

export default Dashboard;