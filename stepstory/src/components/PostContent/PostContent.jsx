import React from "react";
import './style.css';
import CommentButton from "../Buttons/CommentButton/CommentButton";
import ShareButton from "../Buttons/ShareButton/ShareButton";
import WantToGoButton from "../Buttons/WantToGoButton/WantToGoButton";

export default function PostContent({ title, content, onCommentClick }) {
  return (
    <div className="post-content">
      <div className="post-title-buttons">
        <h2 className="post-title">{title}</h2>
        <div className="post-buttons">
          <CommentButton onClick={onCommentClick} />
          <ShareButton />
          <WantToGoButton />
        </div>
      </div>
      <p className="post-body">{content}</p>
    </div>
  );
  }