import React, { useState } from 'react';
import './dobong.scss'

export default function Dobong () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_dobong').forEach((paw_dobong) => {
            paw_dobong.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_dobong').forEach((paw_dobong) => {
            paw_dobong.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_dobong" viewBox="0 0 249 209.32">
                    <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path 
            id='dobong' 
            className={`area_dobong ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 476.12 123 474.83 118.9 479.16 96.66 482.96 94.95 480.47 90.46 481.38 83.39 486.39 78.97 486.57 75.94 482.29 66.88 477.9 63.73 474.57 54.48 469.41 53.32 467.55 44.54 467.93 34.47 466.14 24.47 470.14 20.31 470.1 12.32 478.14 7.34 481.09 1 489.48 2.09 493.89 5.22 499.91 5.58 504.44 2.36 507.46 6.31 510.7 21.21 513.33 24.18 521.61 22.3 529.91 15.98 533.65 16.16 538.52 23.01 544.22 19.01 546.72 26.66 546.41 33.58 550.16 38.78 550.38 45.63 544.44 64.2 543.1 75.45 544.46 82.38 549.16 91.07 549.2 99.55 552.9 106.55 554.08 113.77 553.84 123.14 557.37 131.59 555.21 148.13 551.87 144.43 548.83 136.9 544.39 143.26 539.96 145.46 540.04 149.08 534.54 163.97 530.21 168.76 526.62 166.99 522.95 157.78 516.78 153.58 513.52 144.88 503.24 136.15 498.07 130.6 491.33 126.6 484.79 127.58 476.12 123 Z"/>
        </>
    );
};

