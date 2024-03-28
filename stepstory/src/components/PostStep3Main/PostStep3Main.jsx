import React, { useState } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./style.css";

export default function PostStep3Main({ images }) {
  const [activePrivacy, setActivePrivacy] = useState('public'); // 초기 상태를 'public'으로 설정

  const handlePrivacyClick = (privacy) => {
    setActivePrivacy(privacy); // 클릭된 버튼에 따라 상태를 변경
  };
    return (
        <div className="post-step3-container">
            <div className="left-panel-post3">
                <div className="image-slider-post3-container">
                    <ImageSlider className="image-slider-post3" images={images} />
                </div>
            </div>

            <div className="right-panel-post3">
                <div className="text-input">
                    <textarea className="input-title" placeholder="제목을 입력하세요."></textarea>
                    <textarea className="input-content" placeholder="게시글을 입력하세요."></textarea>
                </div>

                <div className="privacy-settings">
                    <button 
                        className={`privacy-button public ${activePrivacy === 'public' ? 'active' : ''}`}
                        onClick={() => handlePrivacyClick('public')}
                    >
                        PUBLIC
                    </button>
                    <button 
                        className={`privacy-button friend ${activePrivacy === 'friend' ? 'active' : ''}`}
                        onClick={() => handlePrivacyClick('friend')}
                    >
                        FRIEND
                    </button>
                    <button 
                        className={`privacy-button private ${activePrivacy === 'private' ? 'active' : ''}`}
                        onClick={() => handlePrivacyClick('private')}
                    >
                        PRIVATE
                    </button>
                    <button className="submit-button">게시하기</button>
                </div>
            </div>
        </div>
    )
}