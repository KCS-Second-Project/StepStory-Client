import React from "react";
import StepStoryLogo from '../../assets/images/logo.svg';
import './style.css';

export default function Header({location}) {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={StepStoryLogo} alt="StepStory Logo" className="header-logo-image" />
            </div>
            <div className="header-title">
                <h3>{location}</h3>
            </div>
        </div>
    );
}
