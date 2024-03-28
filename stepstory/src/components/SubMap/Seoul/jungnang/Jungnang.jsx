import React, { useState } from 'react';
import './jungnang.scss';

export default function Jungnang () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_jungnang').forEach((paw_jungnang) => {
            paw_jungnang.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_jungnang').forEach((paw_jungnang) => {
            paw_jungnang.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='jungnang' 
            className={`area_jungnang ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            d="M 642.44 307.38 632.35 314.85 622.62 317.02 622.58 317.02 608.94 312.96 599.22 311.68 597.34 309.2 595.93 293.82 594.72 289.99 587.8 280.35 588.74 276.64 584.18 268.36 585.14 263.74 582.72 256 582.85 250.92 589.34 241.17 586.82 233.24 586.04 224.07 587.3 212.02 583.35 206.58 594.58 203.3 605.83 198.49 614.69 195.89 621.13 197.47 629.11 201.28 638.97 195.76 644.44 196.67 658.61 195.55 661.27 194.27 669.83 197.94 673.86 201.9 672.94 206.38 674.44 216.54 672.92 223.53 676.3 226.5 675.45 233.71 667.81 245.84 673.13 255.49 672.71 259.03 666.36 260.81 661.25 270.62 657.93 284.43 647.37 291.05 642.95 301.86 642.44 307.38 Z"/>
        </>
    );
};

