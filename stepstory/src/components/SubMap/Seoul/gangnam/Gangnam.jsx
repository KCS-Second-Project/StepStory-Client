import React, { useState } from 'react';
import './gangnam.scss';

export default function Gangnam () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gangnam').forEach((paw_gangnam) => {
            paw_gangnam.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gangnam').forEach((paw_gangnam) => {
            paw_gangnam.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='gangnam' 
            className={`area_gangnam ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 556.78 415.75 580.76 426.3 578.42 433.69 582.43 477.1 596.11 478.76 609.87 484.61 630.03 491.81 646.63 501.4 653.27 507.2 664.55 527.75 685.86 564.22 672.97 574.51 671.83 583.03 664.92 579.61 662.17 575.8 651.96 573.89 647.9 574.47 647.11 579.55 642.21 582.11 637.82 588.68 630.43 588.23 631.34 577.2 624.39 574.13 624.38 567.8 621.4 562.75 617.08 559.64 614.1 553.78 609.51 548.83 610.17 542.14 594.77 544.89 594.72 544.94 587.57 550.79 579.72 553.03 573.06 557 564.12 557.51 563.38 557.54 554.52 558.16 545.75 561.82 545.66 561.75 545.85 551.37 534.87 537.72 532.92 531.43 532.71 529.95 528.41 518.73 522.05 519.37 521.72 519.43 521.02 519.55 520.4 519.66 515.05 520.57 514.05 520.74 488.49 452.57 483.47 430.97 478.55 423.68 474.61 429.07 465.88 421.83 478.25 406.24 482.89 401.81 488.5 398.35 490.03 397.48 490.55 397.48 492.85 397.5 510.08 397.54 512.39 397.54 520.31 397.58 525.55 397.65 537.39 401.46 537.58 401.6 554.7 414.91 556.78 415.75 Z"/>
        </>
    );
};

