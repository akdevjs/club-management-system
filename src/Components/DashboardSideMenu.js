import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboardSideMenu.css";
function DashboardSideMenu({ page }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="dashboard__child">
        <div
          onClick={() => navigate("/user/dashboard")}
          className="menu__option"
          style={{
            background:
              page === "dashboard" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/dashboard.png" alt="" />
          <h2>Dashboard</h2>
        </div>
        <div
          onClick={() => navigate("/user/members")}
          className="menu__option"
          style={{
            background:
              page === "members" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/members.png" alt="" />
          <h2>Members</h2>
        </div>
        <div
          onClick={() => navigate("/user/events")}
          className="menu__option"
          style={{
            background: page === "events" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/events.png" alt="" />
          <h2>Events</h2>
        </div>
        <div
          onClick={() => navigate("/user/explore")}
          className="menu__option"
          style={{
            background:
              page === "explore" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/explore.png" alt="" />
          <h2>Explore</h2>
        </div>
        <div
          onClick={() => navigate("/user/clubs")}
          className="menu__option"
          style={{
            background: page === "clubs" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/clubs.png" alt="" />
          <h2>Clubs</h2>
        </div>
        <div
          className="menu__option"
          onClick={() => navigate("/user/chat")}
          style={{
            background: page === "chat" ? "rgba(13, 91, 163, 0.29)" : "white",
          }}
        >
          <img src="/imgs/chat.png" alt="" />
          <h2>Chat</h2>
        </div>
        <button onClick={() => navigate("/")} className="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default DashboardSideMenu;
