import React from 'react';
import './Main.css';
import Footer from '../Footer/footer';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';

// 전체 화면 컴포넌트
const Main = () => {

    //로그인 정보
    const loggedInInfo = {isLoggedIn: true};
    //페이지 정보
    const pageInfo = {page: 'main'};

    return (
        <div className="main">
            <div className="main-content">
                <LeftPane loggedInInfo={loggedInInfo}/>
                <RightPane pageInfo={pageInfo}/>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
