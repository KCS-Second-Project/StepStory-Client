import React, { useState } from 'react';

export default function Jeonbuk () {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_jb').forEach((paw_jb) => {
            paw_jb.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_jb').forEach((paw_jb) => {
            paw_jb.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_jb" viewBox="0 0 249 209.32">
                    <image href='/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path
            id='jeonbuk'
            className={`area_jb ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 64.11 404.29 76.9 426.94 86.17 428.47 106.36 416.09 108.17 404.15 116.78 400.57 132.11 402.78 135.17 411.29 144.67 416.87 157.25 410.12 177.61 404.86 183.11 424.71 192.33 427.25 195.3 432.12 204.87 432.13 207.58 422.92 219.74 410.02 224.88 418.33 242.3 426.66 255.44 421.59 263.24 440.34 262.05 449.84 255.68 451.09 238.33 460.79 226.6 473.7 226.41 483.22 220.15 495.65 218.71 506.96 221.02 516.6 228.5 532.61 218.74 547.54 220.36 553.79 213.74 558.21 201.55 548.68 191.13 549.11 185.42 558.5 179.54 555.68 172.73 559.01 151.01 553.81 142.73 559.84 132.34 556.24 136.11 547.49 131.3 544.73 133.36 536.07 130.71 528.57 115.15 541.84 109.59 531.93 100.97 528.01 89.44 528.23 84.17 545.05 70.74 555.51 64.69 552.61 53.58 557.89 47.73 538.67 40.03 535.14 46.58 518.13 49.62 506.21 43.39 501.04 44.33 495.09 53.38 434.17 51.57 399.82 64.11 404.29 Z"/>
        </>
    );
};

