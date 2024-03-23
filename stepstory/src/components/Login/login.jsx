import React, { useState } from 'react';
import './login.css'; // 스타일 파일을 불러옵니다.
import logo from '../../image/Blogo.svg';
import kakaoLogin from '../../image/loginKakao.png';
import googleLogin from '../../image/loginGoogle.png';


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

// 오른쪽 화면 컴포넌트
const RightPane = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false); // 로그인 에러 상태 추가

    const handleLogin = () => {
        // 로그인 처리 로직을 여기에 추가합니다.
        console.log('Username:', username);
        console.log('Password:', password);

        // 예시: 로그인 실패 시 에러 메시지 띄우기
        if (username !== 'correct_username' || password !== 'correct_password') {
            setLoginError(true); // 로그인 에러 상태 업데이트
            return;
        }

        // 로그인 성공 시 에러 상태 초기화
        setLoginError(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin();  // 엔터 키가 눌리면 로그인 처리 함수 호출
        }
    };

    return (
        <div className="right-pane">
            <div className="social-login-box">
                <h1 className="centerAlign">LOGIN</h1>
                <div className="login-box">
                    <br/>
                    <div className="input-box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="아이디"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
                        />
                        {loginError && ( // 로그인 에러 발생 시 메시지 띄우기
                            <p className="error-message">아이디 또는 비밀번호를 다시 확인해주세요.</p>
                        )}
                    </div>
                    <br/>
                    <button className="login-btn" onClick={handleLogin}>로그인</button>
                </div>
                <a href="/oauth2/authorization/kakao" className="social-login-link">
                    <img src={kakaoLogin} alt="Kakao Login" className="social-login-btn"/>
                </a>
                <a href="/oauth2/authorization/google" className="social-login-link">
                    <img src={googleLogin} alt="Google Login" className="social-login-btn"/>
                </a>

                <h5 className="signup-text">아직 회원이 아니신가요? <button className="signup-btn"> 회원가입</button></h5>
            </div>
        </div>
    );
};


// 전체 화면 컴포넌트
const Login = () => {
    return (
        <div className="login">
        <LeftPane />
            <RightPane />
        </div>
    );
};

export default Login;
