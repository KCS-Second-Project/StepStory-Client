import './FriendStory.css';
import Footer from '../Footer/footer';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';


// 전체 화면 컴포넌트
const FriendStory = () => {

    //로그인 정보
    const loggedInInfo = {isLoggedIn: true};
    //페이지 정보
    const pageInfo = {page: 'friendStory'};

    return (
        <div className="FriendStory">
            <div className="main-content">
                {/* 좌측 패널 컴포넌트 */}
                <LeftPane loggedInInfo = {loggedInInfo} />
                {/* 우측 패널 컴포넌트 */}
                <RightPane pageInfo = {pageInfo} />
            </div>
            <Footer />
        </div>
    );
};

export default FriendStory;
