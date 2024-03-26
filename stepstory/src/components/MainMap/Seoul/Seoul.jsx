import React, { useState } from 'react';
import './su.scss';

export default function Seoul () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_su').forEach((paw_su) => {
            paw_su.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_su').forEach((paw_su) => {
            paw_su.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_su" viewBox="0 0 249 209.32">
                    <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path 
            id='seoul' 
            className={`area_su ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 146.87 154.4 137.84 161.05 127.75 154.44 121.19 159.65 112.84 160.54 108.25 150.93 100.37 152.02 98.1 129.54 112.11 131.64 114.47 121.22 124.12 123.04 129.86 110.62 141.83 113 152.63 131.2 148.56 145.46 146.87 154.4 Z"/>
        </>
    );
};

