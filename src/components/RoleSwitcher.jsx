const RoleSwitcher = ({ role, setRole }) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <label>Select Role: </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    );
  };
  
  export default RoleSwitcher;