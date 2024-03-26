import React, { useState } from 'react';
import taegeukgi from '../../../assets/images/태극기.png';
import './dau.scss';


export default function DokdoAndUlleungdo  () {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.flague').forEach((flague) => {
            flague.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.flague').forEach((flague) => {
            flague.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <svg id="svg-sprite">
                <symbol id="flague" viewBox="0 0 249 209.32">
                    <image href={taegeukgi} x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
           
            <path 
            id='DokdoAndUlleungdo'
            className={`area_DaU ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 688.23 201.14 689.92 202.42 692.54 203.22 694.78 206.04 697.65 206.43 696.22 208.96 692.69 208.3 689.01 211.57 689.13 213.68 689.56 216.84 686.76 218.14 681.85 214.6 678.16 216.76 674.49 213.35 676.15 211.72 677.88 212.23 679.85 208.43 679.51 205.73 681.17 201.77 683.57 199 686.86 197.41 689.33 198.51 688.23 201.14 Z M 663.82 183.25 666.86 184.89 668.31 189.09 668.32 191.51 672.15 196.28 670.68 198.95 671.91 200.94 669.4 202.04 667.33 204.06 667.95 205.29 666.21 207.57 662.16 206.46 660.25 207.22 656.36 206.2 654.4 203.97 655.83 198.9 653.38 196.73 652.66 194.95 657.25 193.37 658.58 191.15 660.12 193.11 663.33 189.96 662.56 183.65 663.82 183.25 Z M 604.19 155 605.71 156.59 606.97 161.22 605.19 165.85 606.27 169.13 609.31 172.2 609.35 174.53 608.05 176.36 608.82 179.81 606.79 181.78 608.53 187 610.89 187.85 604.55 192.91 601.51 192.82 599.17 193.92 594.41 198.58 593.36 202.44 585.54 201.32 583.22 199.66 580.46 199.76 575.75 198.55 574.09 196.35 571.36 195.46 567.11 195.29 565.52 191.88 563.49 190.55 562.52 187.52 563.95 182.88 563.71 180.32 562.2 177.62 559.19 175.41 558.49 172.09 562.07 172.37 563.87 170.74 567.02 170.22 568.39 168.46 573.7 167.6 574.42 166.31 580.25 163.1 584.38 163.4 588.65 162.13 591.96 158.71 599.05 159.17 600.46 156.86 604.19 155 Z" />          
        </>
    );
};

