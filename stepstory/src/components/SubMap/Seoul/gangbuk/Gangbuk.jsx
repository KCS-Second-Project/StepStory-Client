import React, { useState } from 'react';
import './gangbuk.scss';

export default function Gangbuk () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gangbuk').forEach((paw_gangbuk) => {
            paw_gangbuk.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gangbuk').forEach((paw_gangbuk) => {
            paw_gangbuk.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='gangbuk'
            className={`area_gangbuk ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
             d="M 460.24 40.08 468.03 41.63 469.41 53.32 474.57 54.48 477.9 63.73 482.29 66.88 486.57 75.94 486.39 78.97 481.38 83.39 480.47 90.46 482.96 94.95 479.16 96.66 474.83 118.9 476.13 122.96 484.79 127.58 491.33 126.6 498.07 130.6 503.24 136.15 513.52 144.88 516.78 153.58 522.95 157.78 526.62 166.99 530.21 168.74 535.45 175.11 540.45 178.25 545.52 186.07 540.03 190.02 534.42 199.47 527.87 205.4 520.7 214.28 508.21 222.47 508.12 214.38 500.96 213.56 492.78 216.64 487.27 210.83 482.16 208.07 478.18 208.67 469.92 203.43 464.47 194.64 465.74 186.25 449.4 180.97 442.07 171.23 430.71 162.1 424.1 157.86 422.53 154.2 423.7 147.68 419.12 138.94 422.69 134.07 420.51 124.76 415.05 117.31 412.45 109.33 418.84 107.06 427.02 98.5 428.95 89.43 436.5 87.46 439.07 81.32 440.11 69.46 438.6 57.73 436.63 53.01 440.22 51.36 446.41 43.87 460.24 40.08 Z"/>
        </>
    );
};

