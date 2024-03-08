import React from "react";
import './style.css';
import UserProfile from "../UserProfile/UserProfile";

export default function Comment({ image, user, date, content }) {
    return (
      <div className="comment">
        <UserProfile image={image} user={user} date={date} />
        <p className="comment-body">{content}</p>
        <div className="reply-container">
            <button className="reply-button">답글 달기</button>
        </div>
      </div>

    );
  }