import React, { useState } from 'react';

export default function Gyeonggi  ()  {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gg').forEach((paw_gg) => {
            paw_gg.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gg').forEach((paw_gg) => {
            paw_gg.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_gg" viewBox="0 0 249 209.32">
                    <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path
            id='gyeonggi'
            className={`area_gg ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 59.07 143.71 65.16 149.57 53.95 154.04 44.23 162.28 34.87 158.74 31.31 153.52 40.48 148.3 59.07 143.71 Z M 69.12 137.78 61.31 127.06 57.36 115.32 57.93 100.99 77.63 95.44 81.12 80.95 79.23 62.28 100.88 55.05 106.07 48.07 106.73 36.5 120.87 25.21 125.94 17.39 144.54 9.76 153.92 16.45 155.93 24.63 175.36 37.23 183.93 32.81 193.07 34.61 195.58 51.79 207.77 54.86 208.88 61.24 217.04 63.38 219.21 72.54 206.23 84.95 205.17 94.45 211.06 107.33 210.71 124.46 218.08 120.45 232.81 132.3 239.82 131.32 253.68 138.58 240.64 147.8 247.18 161.14 241.1 172.75 241.92 184.06 239.14 200.44 230.1 216.62 222.49 215.58 221.61 223.94 206.78 231.68 195.92 233.37 191.19 241.59 186 242.3 171.28 263.21 159.76 254.96 157.04 250.91 143.62 247.13 138.06 253.11 124.64 254.42 103.85 258.09 74.8 199.33 80.42 192.46 85.04 183.91 69.06 168.96 69.12 137.78 Z M 146.87 154.4 148.56 145.46 152.49 131.34 141.83 113 129.86 110.62 123.84 123.31 114.47 121.22 112.11 131.64 97.96 129.82 100.37 152.02 108.25 150.93 112.84 160.54 121.19 159.65 127.75 154.44 137.84 161.05 146.87 154.4 Z M 43.35 85.89 54.46 94.9 56.52 119.32 54.65 129.64 38.65 129.9 34.81 122 33.19 116.94 31.83 108.8 31.27 93.28 43.35 85.89 Z"/>
        </>
    );
};

