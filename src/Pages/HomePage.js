import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import "../styles/homepage.css";
function HomePage() {
  return (
    <div className="home_page_main">
      <Header />
      <Home />
    </div>
  );
}

export default HomePage;
