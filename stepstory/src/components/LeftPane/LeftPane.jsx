import React, { useState } from 'react';
import './leftPane.css';
import logo from '../../image/Blogo.svg';
import open from "../../image/OpenD.png"
import close from "../../image/CloseD.png"
import Profile from '../Profile/Profile';

// 상단 로그인에 따른 상태변화
function UpState(props) {

    if(props != null){
        const isLoggedIn = props.isLoggedIn;

        if(isLoggedIn){
            return <Login1 />;
        }else{
            return <Logout />;
        }
    }
}

// 하단 로그인에 따른 상태변화
function DownState(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <Login2 />;
    }
}

//로그인이 안 돼있을 시 로그인,회원가입 버튼 표기
const Logout = () => {

    return(
        <div className="buttons">
            <button className="btn">LOGIN</button>
            <button className="btn">SIGN</button>
        </div>
    )
}

//로그인시 프로필 표기
const Login1 = () => {
    return(
        <Profile />
    )
    
}

//로그인시 하단에 로그아웃, 마이스토리, 글쓰기 버튼 표기
const Login2 = () => {
    const [isHovered, setIsHovered] = useState(false); // 버튼의 호버 상태를 추적하기 위한 상태 추가

    return(
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
    )
}

//왼쪽 상태 총 표기
const LeftPane = ({props}) => {

    return (
        <div className="left-pane">
            <div className="left-content">
                <img src={logo} alt="Logo" className="logo"/>
                {UpState(props)}
            </div>
            <div className="logout-container">
                {DownState(props)}
            </div>
        </div>
    );
};

export default LeftPane;


