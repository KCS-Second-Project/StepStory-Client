import './MyStory.css';
import Footer from '../Footer/footer';
import LeftPane from '../LeftPane/LeftPane';
import RightPane from '../RightPane/RightPane';

// 전체 화면 컴포넌트
const MyStory = () => {

    //로그인 정보
    const loggedInInfo = {isLoggedIn: true};
    //페이지 정보
    const pageInfo = {page: 'myStory'};

    return (
        <div className="MyStory">
            <div className="main-content">
                <LeftPane loggedInInfo={loggedInInfo} />
                <RightPane pageInfo={pageInfo} />
            </div>
            <Footer />
        </div>
    );
};

export default MyStory;
