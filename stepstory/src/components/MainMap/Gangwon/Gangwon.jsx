import React, { useState } from 'react';
import './gw.scss';

export default function Gangwon ()  {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gw').forEach((paw_gw) => {
            paw_gw.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gw').forEach((paw_gw) => {
            paw_gw.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_gw" viewBox="0 0 249 209.32">
                    <image href='/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path
            id='gangwon'
            className={`area_gw ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 363.84 13.83 366.67 27.9 384.58 50.24 393.52 66.82 406.37 85.37 433.03 113.8 433.03 123.9 442.32 131.73 443.42 142.54 453.74 155.2 455.12 162.07 463.23 168.49 465.84 179.14 471.36 186.73 475.66 196.19 476.63 204.36 475.06 212.76 467.13 217.76 455.92 232.14 440.9 221.22 436.23 227.27 415.07 223.17 413.23 228.06 403.74 230.92 392.67 224.36 389.67 230.72 381.81 233.23 370.92 226.94 348.31 220.65 340.12 222.02 334.23 211.81 317.17 211.28 316.8 202.65 307.68 195.07 301.18 201.76 282.24 206.37 279.49 196.08 273.6 193.51 266.75 208.97 245.8 215.15 238.2 201.62 241.92 184.06 241.1 172.75 247.18 161.14 240.64 147.8 253.68 138.58 239.82 131.32 232.81 132.3 218.08 120.45 210.71 124.46 211.06 107.33 205.17 94.45 206.23 84.95 219.21 72.54 217.04 63.38 208.88 61.24 207.77 54.86 195.58 51.79 193.07 34.61 183.93 32.81 175.36 37.23 155.93 24.63 153.88 16.39 144.86 10.56 154.57 5.16 178.19 5.22 193.68 5.34 208.2 4.25 224.92 3.15 239.99 2.33 247.66 1 255.06 2.02 263.28 1.23 273 2.29 305.21 4.25 322.75 4.79 337.54 6.44 363.84 13.83 Z"/>  
        </>
    );
};

