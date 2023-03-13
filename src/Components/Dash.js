import React, { useState } from "react";
import { UserData } from "./Data";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import "../styles/dash.css";

function Dash() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Visitors Statistic",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#0077c2",
          "#5c8cd0",
          "#6699cc",
          "#4682b4",
          "#3b5998",
          "#2f4f4f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const days = [
    {
      day: "Mon",
      date: 25,
      times: ["10.00", "11.00", "12.00"],
    },
    {
      day: "Tues",
      date: 26,
      times: ["08.00", "09.00", "10.00"],
    },
    {
      day: "Wed",
      date: 27,
      times: ["12.00", "-", "13.00"],
    },
    {
      day: "Thurs",
      date: 28,
      times: ["10.00", "11.00", "-"],
    },
    {
      day: "Fri",
      date: 29,
      times: ["-", "14.00", "16.00"],
    },
    {
      day: "Sat",
      date: 30,
      times: ["10.00", "11.00", "12.00"],
    },
    {
      day: "Sun",
      date: 31,
      times: ["10.00", "11.00", "12.00"],
    },
  ];
  const data = [
    {
      name: "Alina pavlyuchenko",
      time: "09:00 - 18:00",
      room: "Alpana Diem",
      place: "21D",
      parking: "146",
    },
    {
      name: "Bahdan Husak",
      time: "09:00 - 18:00",
      room: "Centaurus",
      place: "62B",
      parking: "237",
    },
  ];
  return (
    <div className="dash__main main">
      <div className="search_">
        <div className="search__container">
          <input type="text" placeholder="Search" />
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
      <div className="dash__header">
        <h1>Club Enrolment Portal</h1>
      </div>
      <div className="dash__callender">
        <div className="callender__header">
          <img src="/imgs/left_arrow.svg" alt="" />
          <img src="/imgs/right_arrow.svg" alt="" />
          <span>25 - 31 May 2020</span>
        </div>
        <div className="all__days">
          {days.map((day) => (
            <div className="day__row">
              <span>{day.day}</span>
              <h2>{day.date}</h2>
              <div className="times__day">
                {day.times.map((time) => (
                  <span className={`${time !== "-" && "time__box"}`}>
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dash__graphs">
        <div>
          <BarChart chartData={userData} />
        </div>
        <div>
          <LineChart chartData={userData} />
        </div>
      </div>
      <div className="dash__Bookings">
        <div className="booking__head">
          <h3>Last Booking</h3>
          <button>View All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Time</th>
              <th>Room</th>
              <th>Place</th>
              <th>Parking</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                <td>
                  <img
                    src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td>{item.room}</td>
                <td>
                  <span className="place">{item.place}</span>
                </td>
                <td>
                  <span className="parking">{item.parking}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dash;
