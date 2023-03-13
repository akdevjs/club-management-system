import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header__main">
      <div className="header__child">
        <div onClick={() => navigate("/")} className="header__img">
          <img src="/imgs/logo.png" alt="" />
        </div>
        <div className="header__navigation">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/allclubs">Bookings</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
          <div onClick={() => navigate("/login")} className="header__signin">
            <img src="/imgs/user.svg" alt="" />
            <span>
              <b>Sign in</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
