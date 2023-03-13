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
          <div className="search_form">
            <div className="club__name">
              <div className="search">
                <input type="text" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
            <div className="category__area">
              <div className="select_head">
                <div className="club__name">
                  <h2>Category</h2>
                  <div className="select">
                    <select
                      required
                      name="category"
                      className="input"
                      id="month"
                      value={cat}
                      onChange={handleCat}
                    >
                      <option value={""}></option>
                      {category.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="select_head">
                <div className="club__name">
                  <h2>Area</h2>
                  <div className="select">
                    <select
                      required
                      name="month"
                      className="input"
                      id="month"
                      value={area}
                      onChange={handleArea}
                    >
                      <option value={""}></option>
                      {areas.map((area, index) => (
                        <option key={index} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
