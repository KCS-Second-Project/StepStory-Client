import React, { useState } from 'react';
import './nowon.scss';

export default function Nowon () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_nowon').forEach((paw_nowon) => {
            paw_nowon.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_nowon').forEach((paw_nowon) => {
            paw_nowon.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='nowon' 
            className={`area_nowon ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  
            d="M 662.07 152.74 665.16 157.35 663.49 169.27 652.65 179.21 648.98 192.79 644.44 196.67 638.97 195.76 629.11 201.28 621.13 197.47 614.69 195.89 605.83 198.49 594.58 203.3 571.14 210.12 560.01 202.32 553.75 196.11 545.37 185.9 540.45 178.25 535.45 175.11 530.21 168.76 534.54 163.97 540.04 149.08 539.96 145.46 544.39 143.26 548.83 136.9 551.87 144.43 555.21 148.13 557.37 131.59 553.84 123.14 554.08 113.77 552.9 106.55 549.2 99.55 549.16 91.07 544.46 82.38 543.1 75.45 544.44 64.2 550.38 45.63 550.17 35.78 556.62 30.69 565.16 28.04 570.35 21.62 571.06 17.67 580.76 17.48 583.26 20.09 589.94 19.85 594.23 16.47 606.04 14.33 611.23 18.82 611.32 24.78 616.3 29.27 628.68 29.2 634.3 31.37 635.08 39.59 628.37 49.34 626.94 57.76 630.1 61.05 631.51 68.54 633.67 70.61 634.55 79.81 632.15 82.75 630.51 93.03 624.88 102.5 627.02 111.7 630.12 119.37 627.17 125.54 631.13 137.86 636.81 139.33 648.94 135.73 656.12 137.02 661.92 142.4 664.7 148.04 662.07 152.74 Z"/>
        </>
    );
};

