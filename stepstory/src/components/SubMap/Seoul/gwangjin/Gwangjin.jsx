import React, { useState } from 'react';
import './gwangjin.scss';

export default function Gwangjin () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gwangjin').forEach((paw_gwangjin) => {
            paw_gwangjin.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gwangjin').forEach((paw_gwangjin) => {
            paw_gwangjin.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='gwangjin' 
            className={`area_gwangjin ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            d="M 599.22 311.68 608.94 312.96 622.58 317.02 622.62 317.02 632.35 314.85 642.44 307.38 648.79 313.09 647.3 316.28 642.92 336.54 644.15 341.54 652.76 348.83 658.76 343.85 664.04 342.8 669.65 348.19 667.42 354.58 662.54 363.12 662.34 371.65 656.21 384.87 621.47 419.19 612.84 424.53 602.03 428.81 596.26 429.83 580.47 426.51 556.78 415.75 590.53 341.49 587.96 340.17 591.26 329.11 596.61 321.14 599.22 311.68 Z"/>
        </>
    );
};

