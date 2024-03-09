import React from "react";
import StepStoryLogo from '../../assets/images/logo.svg';
import './style.css';

export default function Header({locationName}) {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={StepStoryLogo} alt="StepStory Logo" className="header-logo-image" />
            </div>
            <div className="header-title">
                <h3 className="title">{locationName}</h3>
            </div>
        </div>
    );
}
