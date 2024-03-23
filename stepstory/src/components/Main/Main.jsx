import logo from '../../image/logo.svg';
import './Main.css';
import Footer from '../Footer/footer';
import MainMap from "../../components/MainMap/MainMap";

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
