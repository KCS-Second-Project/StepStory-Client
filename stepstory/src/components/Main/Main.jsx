import logo from '../../image/logo.svg';
import './Main.css';
import MainMap from "../../components/MainMap/MainMap";

// 왼쪽 화면 컴포넌트
const LeftPane = () => {
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
                <button className="logout-btn">LOGOUT</button>
            </div>
        </div>
    );
};

const RightPane = () => {
    return (
        <div className="right-pane">
            <MainMap/>
        </div>
    );
};


// 전체 화면 컴포넌트
const Main = () => {
    return (
        <div className="login">
            <LeftPane />
            <RightPane />
        </div>
    );
};

export default Main;
