import React, { useState } from 'react';
import './songpa.scss';

export default function Songpa () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_songpa').forEach((paw_songpa) => {
            paw_songpa.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_songpa').forEach((paw_songpa) => {
            paw_songpa.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <> 
            <path 
            id='songpa' 
            className={`area_songpa ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   
            d="M 665.42 380.69 676.41 385.76 685.09 391.6 678.7 413.08 676.7 417.14 723.77 443.48 720.53 446.77 723.16 453.95 719.18 454.55 716.33 463.54 718.3 471.1 727.7 476.54 735.83 472.94 739.45 477.19 747.92 479.8 750.17 476.73 757.13 483.89 754.03 491.96 754.48 497.82 751.51 503.38 751.55 509.08 736.09 519.59 730.79 526.33 729.74 538.78 724.45 538.5 722.81 546.63 702.45 544.89 702.4 552.28 697.97 561.36 690.58 559.21 685.87 564.23 664.55 527.75 653.27 507.2 646.63 501.4 630.03 491.81 609.87 484.61 596.11 478.76 582.43 477.1 578.42 433.69 580.47 426.51 596.27 429.83 602.03 428.82 612.84 424.53 621.47 419.19 656.21 384.87 657.87 380.67 665.42 380.69 Z"/>
        </>
    );
};

