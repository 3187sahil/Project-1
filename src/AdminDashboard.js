import React from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCreateRequestClick = () => {
    navigate("/create-request"); // Navigate to the form page
  };
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome Requestor</h1>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stats-card">
            <h3>Total Revenue Granted</h3>
            <p className="stat-value">$32,409</p>
          </div>
          <div className="stats-card">
            <h3>Number of Investment Granted</h3>
            <p className="stat-value">2</p>
          </div>
        </div>
      </div>
      <button className="create-request-btn" onClick={handleCreateRequestClick}>
        Create Request
      </button>
    </div>
  );
};

export default AdminDashboard;
