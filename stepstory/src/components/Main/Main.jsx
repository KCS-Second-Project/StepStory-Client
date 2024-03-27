import React from 'react';
import './Main.css';
import Footer from '../Footer/footer';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';

// 전체 화면 컴포넌트
const Main = () => {
    const info = {isLoggedIn: true};
    return (
        <div className="main">
            <div className="main-content">
                <LeftPane props={info}/>
                <RightPane />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
