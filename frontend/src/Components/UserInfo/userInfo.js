import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authenticationProvider";
import "./userInfo.css";

const UserInfo = () => {
  const { authData } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1 className="user">
        Username: {authData?.name}
        <button className="logout-button" onClick={handleLogoutClick}>
          🚪
        </button>
      </h1>
    </div>
  );
};

export default UserInfo;
