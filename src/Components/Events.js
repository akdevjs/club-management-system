import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/events.css";

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const events = [
    {
      day: "FRI",
      date: 24,
      duration: "March 24 - March 26",
      title: "Women's Trauma Healing Retreat",
      subtitle: "Heart & soul Retreat",
      content: "51Lady Carrington Road, Otford",
    },
    {
      day: "FRI",
      date: 24,
      duration: "March 24 - March 26",
      title: "Women's Trauma Healing Retreat",
      subtitle: "Heart & soul Retreat",
      content: "51Lady Carrington Road, Otford",
    },
  ];

  return (
    <div className="events__main">
      <div className="heading">
        <h1>Manage Events</h1>
      </div>
      <div className="header__content">
        <h2>Club Events Calendar</h2>
        <p>
          The calendar allows you to see your entire club's upcoming events,
          training or practice schedules, and more.{" "}
        </p>
      </div>
      <div className="date__setter">
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span className="span">Today</span>
        <h3>
          UPCOMMING{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </h3>
        <div className="date-picker-input">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        </div>
        <button className="set_event">SET EVENT</button>
      </div>
      <div className="main__events__list">
        <h2>Events</h2>
        <div className="month">
          March 2023 <div className="line"></div>
        </div>
        <div className="events__list__all">
          {events.map((event) => (
            <div className="event__card">
              <div className="date__left">
                <span>{event.day}</span>
                <h2>{event.date}</h2>
              </div>
              <div className="date__right">
                <span>{event.duration}</span>
                <h1>{event.title}</h1>
                <div className="subs">
                  <b>{event.subtitle}</b>
                  <span>{event.content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
