import React, { useState } from "react";
import "../styles/notification.css";
function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const comments = [
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
      name: "user",
      action: "like",
      status: "read",
      content:
        "and 21 others liked your post Organic vs Paid : Which Traffic Source is Better",
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
      name: "user",
      action: "follow",
      content: "1,893 others followed your blog",
      status: "unread",
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
      name: "user",
      action: "comment",
      status: "unread",
      content:
        "commented on Use Two-Factor Authentication to Make Your Site More Secure",
      comment:
        "I'm a new blogger and found this is very useful! Thankyou for sharing😁",
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
      name: "user",
      action: "like",
      status: "read",
      content:
        "2and 19 others liked your post Two-Factor Authentication to Make Your Site More Secure",
    },
    {
      img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg",
      name: "user",
      action: "comment",
      status: "unread",
      content:
        "commented on Use Two-Factor Authentication to Make Your Site More Secure",
      comment:
        "Hi Antony, I use the DUO plugin for 2FA because it has one big advantage. you can install the",
    },
  ];
  return (
    <div className="noti__main">
      <img src="/imgs/noti.svg" alt="" onClick={() => setIsOpen(!isOpen)} />
      <div
        className="notication_popup"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        {comments.map((comment, index) => (
          <div
            className="notication"
            style={{
              background: comment.status === "read" ? "#F3F6F8" : "white",
            }}
          >
            <div className="user__img">
              <img src={comment.img} alt="" />
              <img
                className="action__inmg"
                src={
                  comment.action === "comment"
                    ? "/imgs/comment.png"
                    : comment.action === "follow"
                    ? "/imgs/star.png"
                    : "/imgs/plus.png"
                }
              />
            </div>
            <div className="notifying__text">
              <p className="content">
                <b>{comment.name}</b>
                {comment.content}
              </p>
              {comment.action === "comment" && (
                <p className="comment">{comment.comment}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
