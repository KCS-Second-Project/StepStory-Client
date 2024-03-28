import React, { useState } from 'react';
import './seongdong.scss';

export default function Seongdong () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_seongdong').forEach((paw_seongdong) => {
            paw_seongdong.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_seongdong').forEach((paw_seongdong) => {
            paw_seongdong.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <> 
            <path 
            id='seongdong' 
            className={`area_seongdong ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   
            d="M 587.96 340.17 590.53 341.49 556.78 415.75 554.7 414.91 537.58 401.6 537.39 401.46 525.55 397.65 520.31 397.58 512.39 397.54 510.08 397.54 492.85 397.5 490.55 397.48 490.03 397.48 488.5 398.35 482.89 401.81 483.1 393.06 476.15 389.63 468.66 388.83 466.43 382.57 466.89 377.46 465.31 375.24 468.26 368.48 480.1 357.58 480.25 357.39 480.34 357.29 480.81 356.79 484.02 347.47 484.41 347.06 487.44 346.14 487.25 345.59 491.36 345.53 491.48 345.57 494.48 338.04 500.54 331.6 501.08 327.6 494.98 327.24 494.9 323.28 494.9 323.25 494.91 323.08 494.9 322.5 494.7 311.13 502.85 314.75 509.68 316.25 513.11 314.56 515.27 312.47 530 308.77 541.5 315.02 562.01 334.42 585.05 338.67 587.96 340.17 Z"/>
        </>
    );
};

