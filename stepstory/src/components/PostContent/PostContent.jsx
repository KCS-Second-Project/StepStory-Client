import React from "react";
import './style.css';

export default function PostContent({ title, content }) {
    return (
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-body">{content}</p>
      </div>
    );
  }