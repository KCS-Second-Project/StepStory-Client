import React, { useState } from 'react';
import logo from '../../image/Blogo.svg';
import './Main.css';
import Footer from '../Footer/footer';
import MainMap from "../../components/MainMap/MainMap";
import open from "../../image/OpenD.png"
import close from "../../image/CloseD.png"


// 왼쪽 화면 컴포넌트
const MainLeftPane = () => {
    const [isHovered, setIsHovered] = useState(false); // 버튼의 호버 상태를 추적하기 위한 상태 추가

    return (
        <div className="left-pane">
            <div className="left-content">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="buttons">
                    <button className="btn">LOGIN</button>
                    <button className="btn">SIGN</button>
                </div>
            </div>
            <div className="logout-container">
                <button className="story-btn"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                >
                    {/* 버튼 상태에 따라 이미지 변경 */}
                    <img src={isHovered ? open : close} alt="MyStory" className="story-icon" />
                </button>
                <button className="btn">Write Story&nbsp;&nbsp;✏️</button>
                <button className="logout-btn">LOGOUT</button>
            </div>
        </div>
    );
};



// 오른쪽 화면 컴포넌트
const MainRightPane = () => {
    return (
        <div className="right-pane">
            <MainMap/>
        </div>
    );
};

// 전체 화면 컴포넌트
const Main = () => {
    return (
        <div className="main">
            <div className="main-content">
                <MainLeftPane />
                <MainRightPane />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
