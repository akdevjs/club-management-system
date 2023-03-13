import React from "react";
import "../styles/about.css";
function About() {
  const aboutCards = [
    {
      img: "/imgs/fitness.png",
      title: "FITNESS",
      content:
        "ClubEnrolment.com was created to relieve the burden of administration that running children's clubs involves. At the same time, it makes a good impression on parents – your customers – making the enrolment, payment, and re-enrolment processes a doddle for them.",
    },
    {
      img: "/imgs/community.png",
      title: "COMMUNITY",
      content:
        "ClubEnrolment.com was created to relieve the burden of administration that running children's clubs involves. At the same time, it makes a good impression on parents – your customers – making the enrolment, payment, and re-enrolment processes a doddle for them.",
    },
    {
      img: "/imgs/fun.png",
      title: "FUN",
      content:
        "ClubEnrolment.com was created to relieve the burden of administration that running children's clubs involves. At the same time, it makes a good impression on parents – your customers – making the enrolment, payment, and re-enrolment processes a doddle for them.",
    },
  ];
  return (
    <div className="about__main">
      <div className="about__child">
        <h1>About Club Enviorment Portal</h1>
        <div className="about__cards">
          {aboutCards.map((card) => (
            <div className="about__card">
              <img src={card.img} alt="" />
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
