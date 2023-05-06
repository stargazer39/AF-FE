import React from "react";
import "./UserInfoPanel.css";

const UserInfoPanel = ({ user }) => {
  return (
    <div className="user-info-panel">
      <h2>About</h2>
      <div className="user-info-list">
        <div className="user-info-item">
          <strong>Work:</strong> {user.work || "Not specified"}
        </div>
        <div className="user-info-item">
          <strong>Education:</strong> {user.education || "Not specified"}
        </div>
        <div className="user-info-item">
          <strong>Location:</strong> {user.location || "Not specified"}
        </div>
        {/* Add more user information if needed */}
      </div>
    </div>
  );
};

export default UserInfoPanel;
