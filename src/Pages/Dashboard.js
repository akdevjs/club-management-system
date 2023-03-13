import React from "react";
import Chat from "../Components/Chat";
import Dash from "../Components/Dash";
import Clubs from "../Components/Clubs";
import Members from "../Components/Members";
import Events from "../Components/Events";
import DashboardSideMenu from "../Components/DashboardSideMenu";
import "../styles/dashboard.css";
import { useParams } from "react-router-dom";
function Dashboard({ cart }) {
  const { page } = useParams();
  return (
    <div className="dashboard__main">
      <Chat />
      {page === "dashboard" && <img src="/imgs/bg-user.png" alt="" />}

      <div className="dashboard__header">
        <div>
          <img src="/imgs/logo.png" alt="" />
          <img src="/imgs/logo_text.png" alt="" />
        </div>
        {(page === "clubs" || page === "members") && (
          <div className="top__user__header">
            <div className="Search__bar">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Search member" />
            </div>
            <div className="Search__bar">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Search clubs" />
            </div>
            <div className="user__info">
              <img
                src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
                alt=""
                className="profile"
              />
              <span>
                <b>UserName</b>
              </span>
            </div>
          </div>
        )}
        {page === "events" && (
          <div className="top__user__header">
            <div className="Search__bar">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Search clubs" />
            </div>
            <div className="user__info">
              <img
                src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
                alt=""
                className="profile"
              />
              <span>
                <b>UserName</b>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="dashboard__body">
        <DashboardSideMenu page={page} />
        {page === "dashboard" ? (
          <Dash />
        ) : page === "clubs" ? (
          <Clubs />
        ) : page === "members" ? (
          <Members />
        ) : page === "events" ? (
          <Events />
        ) : (
          <h1>Page not Found</h1>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
