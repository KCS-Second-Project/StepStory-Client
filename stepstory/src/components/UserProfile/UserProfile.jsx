import React from 'react';
import './style.css';

export default function UserProfile({ image, user, date }) {
  return (
    <div className="user-profile">
      <div className="user-profile-picture">
        <img className="profile-img" src={image} alt="user profile" />
      </div>
      <div className="user-profile-name">{user}</div>
      <div className="user-profile-date">{date}</div>
    </div>
  );
} 
