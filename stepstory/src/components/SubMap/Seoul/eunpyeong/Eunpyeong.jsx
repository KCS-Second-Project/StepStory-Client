import React, { useState } from 'react';

export default function Eunpyeong ()  {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_eunpyeong').forEach((paw_eunpyeong) => {
            paw_eunpyeong.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_eunpyeong').forEach((paw_eunpyeong) => {
            paw_eunpyeong.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };
    
    return (
        <>
            <path 
            id='eunpyeong' 
            className={`area_eunpyeong ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 371.64 172.69 356.35 179.91 353.42 187.46 356.85 209.97 356.03 217.73 352.89 221.52 340.27 231.22 335.85 238.54 338.78 241.42 337.79 246.1 322.35 251.76 317.47 255.95 312.7 263.04 313.1 270.67 305.19 273.71 299.41 283.63 290.17 283.18 289.62 276.29 284.2 273.28 282.39 276.65 263.48 300.01 238.18 278.91 225.53 264.3 231.24 257.59 234.07 262.42 257.83 260.06 263.33 254.2 262.43 244.08 259.92 237.67 263.99 233.62 260.67 215.77 266.61 197.5 270.17 196.96 273.81 190.12 272.92 184 276.72 179.79 277.07 172.46 274.28 168.76 273.94 162.7 281.13 158.15 279.73 150.5 283.98 136.63 286.73 135.6 306.56 132.49 317.24 123.12 328.69 120.42 331.48 117.78 337.19 107.47 340.96 104.89 351.39 101.38 351.96 106.39 358.58 111.63 364.24 112.51 369.47 116.75 370.79 128.22 373.04 131.26 373.43 142.4 374.76 144.01 381.05 163.71 374.32 172.01 371.64 172.69 Z"/>        
        </>
    );
};

