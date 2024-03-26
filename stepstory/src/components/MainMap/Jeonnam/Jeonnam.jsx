import React, { useState } from 'react';
import './jn.scss';

export default function Jeonnam ()  {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_jn').forEach((paw_jn) => {
            paw_jn.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_jn').forEach((paw_jn) => {
            paw_jn.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_jn" viewBox="0 0 249 209.32">
                    <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path 
            id='jeonnam' 
            className={`area_jn ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 17.84 662.02 19.89 656.74 21.48 651.37 23.19 643.19 23.55 634.16 20.33 631.88 18.5 628.61 16.42 621.34 18.89 619.37 15.95 609.42 18.54 600.03 21.93 591.45 26.17 580.54 22.42 575.27 25.82 564.42 28.73 561.85 34.45 542.69 39.48 534.71 47.73 538.67 53.58 557.89 64.69 552.61 70.74 555.51 84.17 545.05 89.44 528.23 100.97 528.01 109.59 531.93 115.15 541.84 130.71 528.57 133.36 536.07 131.3 544.73 136.11 547.49 132.34 556.24 142.73 559.84 151.01 553.81 172.73 559.01 179.54 555.68 185.42 558.5 191.13 549.11 201.55 548.68 212.26 556.41 220.16 571.91 219.98 578.61 231.64 592.02 231.8 596.06 245.67 611.99 240.98 622.96 244.4 642.8 239.7 658.06 240.55 665.21 233.43 668.19 221.12 672.27 218.7 678.75 209.86 678.95 197.73 689.38 158.69 702.88 145.65 704.94 118.42 703.49 121.16 713.35 112.9 718 96.27 718.59 92.16 715.28 82.21 719.09 65 727 45.95 725.84 38.44 708.71 29.65 703.83 21.58 694.67 13.38 689.67 10.15 671.92 17.84 662.02 Z"/>
        </>
    );
};
