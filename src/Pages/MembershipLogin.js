import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import "../styles/membership.css";
function MembershipLogin() {
  const navigate = useNavigate();
  return (
    <div className="membership__login__main">
      <Header />
      <div className="membership___login__parent">
        <h1>BUILD YOUR MEMBERSHIP</h1>
        <div className="login__card">
          <div className="login__card__left">
            <form>
              <div className="login__form">
                <img src="/imgs/login_logo.png" alt="" />
                <div className="data_card">
                  <label htmlFor="username">Username</label>
                  <div className="input_package">
                    <img src="/imgs/user.svg" alt="" />
                    <input type="text" id="username" />
                  </div>
                </div>
                <div className="data_card">
                  <label htmlFor="password">Password</label>
                  <div className="input_package">
                    <img src="/imgs/pass.svg" alt="" />
                    <input type="text" id="password" />
                  </div>
                </div>
                <button type="submit">Login</button>
                <div className="other__stuff">
                  <div className="remember__me"></div>
                  <a>Recover Password</a>
                </div>
              </div>
            </form>
          </div>
          <div className="login__card__right">
            <h1>NOT A MEMBER?</h1>
            <p>
              JOIN THOUSANDS OF ENTERPRENEURS AND LEARN HOW TO STRATEGICALLY
              TAKE ACTION TO GROW YOUR ONLINE BUSINESS MONTH AFTER MONTH.
            </p>
            <button onClick={() => navigate("/membership/register")}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipLogin;
