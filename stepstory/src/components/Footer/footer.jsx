import React from 'react';
import './footer.css';
import logo from "../../image/Wlogo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="footer-text">
                        <ul className="list-unstyled">
                            <h5>STEPSTORY</h5>
                            <br/>
                            <li>About Us : Hyein, Dongkyum, Inho, ChangHee, Inhong</li>
                            <li>Address : 서울 금천구 가산디지털1로 189 (주)LG 가산 디지털센터</li>
                            <li>Github : <a
                                href="https://github.com/KCS-Second-Project">https://github.com/KCS-Second-Project</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 KAKAO CLOUD SCHOOL DEV. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
