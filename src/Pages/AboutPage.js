import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import "../styles/about.css";
function AboutPage() {
  return (
    <div className="about__page__main">
      <Header />
      <About />
    </div>
  );
}

export default AboutPage;
