import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/startpage.css";
function StartPage({ type }) {
  const navigate = useNavigate();
  return (
    <div className="start__page__main">
      <div className="start__page__child__left">
        <h2>Welcome to our Website</h2>
        <p>
          ClubEnrolment.com was created to relieve the burden of administration
          that running children's clubs involves. At the same time, it makes a
          good impression on parents – your customers – making the enrolment,
          payment, and re-enrolment processes a doddle for them.
        </p>
        <img src="./imgs/main_img.png" alt="" />
      </div>
      <div className="start__page__child__right">
        <button onClick={() => navigate("/")}>
          <img src="./imgs/logo.png" alt="" />
          <img src="./imgs/logo_text.png" alt="" />
        </button>
        <h1>Choose Account Type</h1>
        <div className="buttons">
          <button
            onClick={() =>
              navigate(
                type === "login" ? "/login/indivisual" : "/signup/indivisual"
              )
            }
          >
            User
          </button>
          <button
            onClick={() =>
              navigate(type === "login" ? "/login/club" : "/signup/club")
            }
          >
            Club
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
