import React, { useState } from 'react';
import './gangseo.scss';

export default function Gangseo () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gangseo').forEach((paw_gangseo) => {
            paw_gangseo.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gangseo').forEach((paw_gangseo) => {
            paw_gangseo.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='gangseo' 
            className={`area_gangseo ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 86.57 239.82 102.68 252.65 106.02 258.61 122.15 271.57 129.64 275.55 151.41 292.38 170.89 309.22 175.71 315.13 195.09 330.56 200.14 333.06 222 346.97 217.17 353.69 217.32 357.87 221.9 366.31 217.07 368.89 206.54 368.78 190.92 359.01 186.83 374.93 189.93 385.04 189.22 395.23 190.13 410.14 161.29 414.47 145.28 417.74 133.86 393.79 135.31 391.22 131.46 380.86 125.51 381.28 126.48 371.43 121.78 367.13 117.99 373.51 116.74 381.16 110.39 383.53 91.83 383.24 82.17 376.29 71.87 378.36 66.13 384.12 67.26 390.17 60.69 392.56 56.74 391.06 58.68 381.48 52.71 380.16 50.75 375.51 44.11 370.11 36.58 370.19 25.63 368.44 21.35 363 14.47 364.54 10.89 357.91 6.48 355.76 6.41 350.32 1 347.35 11.15 343.16 23.14 332.16 25.07 327.73 21.35 322.53 31.12 318.86 35.36 304.15 45.32 299.49 50.99 294.3 51.35 287.5 55.41 288.47 60.84 280.99 70.19 264.43 66.93 261.98 66.7 256.37 63.77 246.6 65.3 241.45 74.38 229.22 86.57 239.82 Z"/>
        </>
    );
};

