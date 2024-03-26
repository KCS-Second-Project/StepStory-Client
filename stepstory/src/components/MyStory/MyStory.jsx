import logo from '../../image/Blogo.svg';
import './FriendStory.css';
import Footer from '../Footer/footer';
import MainMap from "../../components/MainMap/MainMap";
import FriendpageButton from "../Buttons/FriendpageButton/FriendpageButton";

// 왼쪽 화면 컴포넌트
const MainLeftPane = () => {
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
            <FriendpageButton/>
            <MainMap/>
        </div>
    );
};

// 전체 화면 컴포넌트
const MyStory = () => {
    return (
        <div className="MyStory">
            <div className="main-content">
                <MainLeftPane />
                <MainRightPane />
            </div>
            <Footer />
        </div>
    );
};

export default MyStory;