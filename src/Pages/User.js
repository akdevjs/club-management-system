import React from "react";
import Chat from "../Components/Chat";
import Notifications from "../Components/Notifications";
import "../styles/user.css";
function User() {
  const events = [
    {
      img: "poster_1",
      date: "March 11, 12, 2023",
    },
    {
      img: "poster_2",
      date: "March 21, 23, 2023",
    },
  ];
  return (
    <div className="user___main">
      <Chat />
      <img src="/imgs/bg-user.png" alt="" />
      <div className="user__page__header">
        <div className="logo" >
          <img src="/imgs/logo.png" alt="" />
          <img src="/imgs/logo_text.png" alt="" />
        </div>
        <div className="left__content">
          <div className="search__">
            <input type="text" />
            <img src="/imgs/search.svg" alt="" />
          </div>
          <Notifications />
          <img src="/imgs/user.svg" alt="" />
          <h3>Sign in</h3>
        </div>
      </div>
      <div className="user__appointment">
        <div className="user__app_top">
          <img src="/imgs/user-art.png" alt="" />
          <p>
            Events on the acceleration of urban culture: upcoming at the Museion
            Art Club. Don't miss the events, from the 17th to the 19th of
            november at the Museion di Events on the acceleration of urban
            culture: upcoming at the Museion Art Club. Don't miss the events,
            from the 17th to the 19th of november at the Museion di Don't miss
            the events, from the 17th to the 19th of november at the Museion di
          </p>
        </div>
        <p className="user_bottom">
          Events on the acceleration of urban culture: upcoming at the Museion
          Art Club. Don't miss the events.
        </p>
        <div>
          <button>Make an Appointment</button>
        </div>
      </div>
      <div className="upcomming__events">
        <h2>Upcoming Events</h2>
        <div className="events__poster">
          {events.map((event) => (
            <div className="poster">
              <img src={`/imgs/${event.img}.png`} alt="" />
              <span>{event.date}</span>
              <button>Register Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
