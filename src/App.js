import "./App.css";
import StartPage from "./Pages/StartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import HomePage from "./Pages/HomePage";
import MembershipLogin from "./Pages/MembershipLogin";
import AboutPage from "./Pages/AboutPage";
import Membership from "./Pages/MembershipPage";
import MembershipSignup from "./Pages/MembershipSignup";
import AllClubs from "./Pages/AllClubs";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/login",
      element: <StartPage type="login" />,
    },
    {
      path: "/signup",
      element: <StartPage type="signup" />,
    },

    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/membership",
      element: <Membership />,
    },
    {
      path: "/allclubs",
      element: <AllClubs />,
    },
    {
      path: "membership/login",
      element: <MembershipLogin />,
    },
    {
      path: "membership/register",
      element: <MembershipSignup />,
    },
    {
      path: "/login/:user",
      element: <Login />,
    },
    {
      path: "/signup/:user",
      element: <Signup />,
    },
    {
      path: "/user/:page",
      element: <Dashboard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
