import React from "react";
import "./style.css";
import Comment from "../Comment/Comment";
import DefaultProfile from "../../assets/images/defaultprofile.png";


export default function PostComments({ comments }) {
    return (
        <div className="post-comments">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
            <Comment
            key={index}
            image={DefaultProfile}
            user={comment.user}
            date={comment.date}
            content={comment.content}
            />
        ))}
        </div>
    );
    }
