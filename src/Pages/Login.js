import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Login() {
  const { user } = useParams();

  return (
    <div className="login__main">
      <div className="login__child__left">
        {user === "indivisual" ? (
          <img src="/imgs/login.png" alt="" />
        ) : (
          <div className="club__img">
            <img src="/imgs/login_club.png" alt="" />
            <button>Join Now</button>
          </div>
        )}
      </div>
      <div className="login__child__right">
        <h1>Login{user === "club" && " as club"}</h1>
        <form>
          <div className="login__form">
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
            <div className="other__stuff">
              <div className="remember__me">
                <input type="checkbox" name="rem" id="rem" />
                <label htmlFor="rem">Remember Me </label>
              </div>
              <a>Recover Password</a>
            </div>
          </div>
          <button type="submit">Login</button>
          <div className="login__with__google">
            <img src="/imgs/google.svg" alt="" />
            <h3>Sign in with Google</h3>
          </div>
        </form>

        <div className="dont__have__account">
          <div> Don't have an account?</div>
          <Link to={`/signup/${user}`}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
