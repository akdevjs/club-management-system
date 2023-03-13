import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/membership.css";
function Membership() {
  const navigate = useNavigate();
  return (
    <div className="membership__main">
      <Header />
      <div className="membership__child">
        <div className="background__img">
          <img src="/imgs/membership.png" alt="" />
          <h1>Means More Here!</h1>
        </div>
        <div className="para">
          <p>
            Our core membership offering allows you to add up additional members
            to your account. Because we know that our best times are shared with
            the ones we love.
          </p>
        </div>
        <button onClick={() => navigate("/membership/login")}>
          BUILD MY MEMBERSHIP &gt;{" "}
        </button>
      </div>
    </div>
  );
}

export default Membership;
