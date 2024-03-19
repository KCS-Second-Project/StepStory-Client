import logo from '../../image/logo.svg';
import './Main.css';

// 왼쪽 화면 컴포넌트
const LeftPane = () => {
    return (
        <div className="left-pane">
            <img src={logo} alt="Logo" className="logo" />
            <div className="buttons">
                <button className="btn">LOGIN</button>
                <button className="btn">SIGN</button>
            </div>
        </div>
    );
};

const RightPane = () => {
    return (
        <div className="right-pane">

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
