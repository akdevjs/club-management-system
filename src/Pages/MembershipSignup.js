import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import "../styles/membership.css";

function MembershipSignup() {
  const [clubname, setClubline] = useState("");
  const months = [
    "Club Number 1",
    "Club Number 2",
    "Club Number 3",
    "Club Number 4",
    "Club Number 5",
    "Club Number 6",
  ];
  const handleClubline = (e) => {
    setClubline(e.target.value);
  };
  return (
    <div>
      <Header />
      <form className="membership__signup__child">
        <h1>CLUB MEMBERSHIP REGISTRATION</h1>
        <div>
          <div className="club__name">
            <h2>Club Name</h2>
            <div className="select">
              <select
                required
                name="month"
                className="input"
                id="month"
                value={clubname}
                onChange={handleClubline}
              >
                <option value={""}></option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="user__pass">
            <div className="usename">
              <h2>Username</h2>
              <input type="text" />
            </div>
            <div className="password">
              <h2>Password</h2>
              <input type="password" />
            </div>
          </div>
          <div className="email">
            <div className="usename">
              <h2>Email</h2>
              <input type="email" />
            </div>
          </div>
          <div className="email">
            <div className="usename">
              <h2>Address</h2>
              <input type="text" />
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MembershipSignup;
