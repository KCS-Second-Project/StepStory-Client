import React from 'react';
import './style.css';
import UserProfile from '../UserProfile/UserProfile';
import ImageSlider from '../ImageSlider/ImageSlider';
import PostContent from '../PostContent/PostContent';
import ImageOptionButton from '../Buttons/ImageOptionButton/ImageOptionButton';


export default function PostCard({ images, profileImage, user, date, title, content, onCommentClick }) {
  return (
    <div className="postcard-container">
      <div className="postcard-header">
        <UserProfile className="user" image={profileImage} user={user} date={date} />
        <ImageOptionButton className="button" />
      </div>
      <ImageSlider images={images} />
      <PostContent title={title} content={content} onCommentClick={onCommentClick} />
    </div>
  );
}