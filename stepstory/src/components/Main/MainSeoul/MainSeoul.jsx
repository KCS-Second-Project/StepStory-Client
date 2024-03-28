import React from 'react';
import Footer from '../../Footer/footer';
import LeftPane from '../../LeftPane/LeftPane';
import RightPane from '../../RightPane/RightPane';

// 전체 화면 컴포넌트
export default function MainSeoul  () {

    //로그인 정보
    const loggedInInfo = {isLoggedIn: true};
    //페이지 정보
    const pageInfo = {page: 'mainSeoul'};

    return (
        <div className="main">
            <div className="main-content">
                <LeftPane loggedInInfo={loggedInInfo}/>
                <RightPane pageInfo={pageInfo} />
            </div>
            <Footer />
        </div>
    );
};


