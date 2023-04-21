import React, { useState } from "react";
import Header from "../Components/Header";
import "../styles/allclub.css";
function AllClubs() {
  const [cat, setCat] = useState("");
  const [area, setArea] = useState("");
  const category = ["Catagory 1", "Catagory 2", "Catagory 3"];
  const areas = ["Area 1", "Area 2", "Area 3"];
  const clubs = [
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
    {
      title: "Flim Club",
      content:
        "Want to learn more about this?Watch this introduction video to start engaging students with short nonfiction films.",
    },
  ];
  const handleArea = (e) => {
    setCat(e.target.value);
  };
  const handleCat = (e) => {
    setCat(e.target.value);
  };
  return (
    <div className="all__club__main">
      <Header />
      <div className="all__club__parent">
        <div className="all__club__child">
          <div className="search_form"></div>
          <h3>Suggestions</h3>
          <div className="clubs__cards">
            {clubs.map((club, index) => (
              <div className="club_card">
                <h2>{club.title}</h2>
                <img src={`/imgs/club_${index + 1}.png`} alt="" />
                <p>{club.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllClubs;
