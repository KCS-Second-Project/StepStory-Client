import React from 'react';
import './style.css';

export default function UserProfile({ user, date }) {
  return (
    <div className="user-profile">
      <div className="user-profile-picture"></div>
      <div className="user-profile-name">{user}</div>
      <div className="user-profile-date">{date}</div>
    </div>
  );
}
