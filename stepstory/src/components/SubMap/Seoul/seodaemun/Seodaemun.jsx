import React, { useState } from 'react';
import './seodaemun.scss';

export default function Seodaemun () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_seodaemun').forEach((paw_seodaemun) => {
            paw_seodaemun.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_seodaemun').forEach((paw_seodaemun) => {
            paw_seodaemun.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <> 
           <path 
           id='seodaemun' 
           className={`area_seodaemun ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  
           d="M 376.9 341.43 372.01 345.57 366.4 345.14 338.13 347.04 329.52 350.44 310 341.35 310.51 335.54 313.27 330.64 306.54 325 294.57 321.49 275.5 310.42 263.52 300 267.46 294.06 282.39 276.65 284.2 273.28 289.62 276.29 290.17 283.18 299.41 283.63 305.19 273.71 313.1 270.68 312.7 263.04 317.47 255.95 322.35 251.76 337.79 246.1 338.78 241.42 335.85 238.54 340.27 231.22 352.89 221.52 358.06 223.97 363 231.04 359.75 237.23 361.6 242.77 370.49 247.64 372.37 255.12 369.43 258.7 369 270.26 370.19 280.48 368.64 291.51 361.68 294.03 381.44 318.36 388.18 327.38 391.77 334.35 376.9 341.43 Z"/>
        </>
    );
};

