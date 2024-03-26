import React, { useState } from 'react';
import './gn.scss';

export default function Gyeongnam ()  {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gn').forEach((paw_gn) => {
            paw_gn.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gn').forEach((paw_gn) => {
            paw_gn.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };
    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_gn" viewBox="0 0 249 209.32">
                    <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path
            id='gyeongnam'
            className={`area_gn ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 378.37 600.79 372.01 604.2 364.53 608.34 355.89 612.44 347.1 621.17 329.42 623.8 323.73 628.82 318.21 627.27 310.5 630.3 304.35 631.75 294.15 631.92 287.32 629.04 277.97 623.99 273.76 623.82 269.39 626.41 265.83 627.22 261.95 631.43 255.15 636.61 244.31 642.92 240.91 623.34 245.67 611.99 231.8 596.06 231.64 592.02 219.98 578.61 220.16 571.91 213.53 558.74 220.36 553.79 218.74 547.54 228.5 532.61 221.02 516.6 218.71 506.96 220.15 495.65 226.41 483.22 226.6 473.7 238.33 460.79 255.68 451.09 261.79 449.84 279.79 460.78 288.61 458.44 296.88 462.34 298.72 468.91 306.91 475.04 308.88 495.23 324.85 492.91 333.87 500.71 355.43 495.61 369.86 506.51 378.73 503.18 394.05 508.64 408.63 502.89 417.83 494.64 428.23 500.45 437.92 492.49 446.12 481.96 461.89 478.87 470.58 483.91 475.99 492.92 484.62 486.28 499.5 491.37 501.76 503.43 498.4 521.98 484.28 526.39 486.52 546.83 475.85 553.45 466.43 578.9 459.95 584.83 450.54 585.11 449.67 594.67 436.22 596.69 422.05 596.69 407.41 598.99 398.93 598.74 385.41 596.68 378.37 600.79 Z"/>               
        </>
    );
};

