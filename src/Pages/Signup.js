import React from "react";
import "../styles/signup.css";
import { useParams, useNavigate } from "react-router-dom";

function Signup() {
  const { user } = useParams();
  const navigate = useNavigate();
  return (
    <div className="sign__up__main">
      <div className="sign__up__left">
        <div className="sign__up__header">
          <img src="/imgs/logo.png" alt="" />
          <img src="/imgs/logo_text.png" alt="" />
        </div>
        <form>
          <div className="heading__of__form">
            <h1>Create an Account</h1>
            <p>Lets get started with a 30 day free trial</p>
          </div>
          {user === "indivisual" ? (
            <>
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Gender" />
            </>
          ) : (
            <>
              <input type="text" placeholder="Clubname" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
            </>
          )}
          <div className="buttons">
            <button type="submit">Create Account</button>
            <a>
              <img src="/imgs/google.svg" alt="" />
              <span>Sign up with Google</span>
            </a>
          </div>
        </form>
      </div>
      <div className="sign__up__right">
        <div className="background__img">
          <img src="/imgs/sign_up.png" className="main__img" alt="" />
          <img src="/imgs/sign_up_1.png" className="child__img" alt="" />
          <button onClick={() => navigate(`/login/${user}`)}>
            <img src="/imgs/user.svg" alt="" />
            <span>Log in</span>
          </button>
        </div>
      </div>
    </div>
   
  );
}

export default Signup;
