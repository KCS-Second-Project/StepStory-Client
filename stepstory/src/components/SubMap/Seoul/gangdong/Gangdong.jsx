import React, { useState } from 'react';

export default function Gangdong () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_gangdong').forEach((paw_gangdong) => {
            paw_gangdong.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_gangdong').forEach((paw_gangdong) => {
            paw_gangdong.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='gangdong' 
            className={`area_gangdong ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 790.04 315.55 792.38 327.74 796.94 338.53 795.62 357.74 799 362.26 798.4 373.59 791.74 373.04 784.84 376.27 777.96 375.46 767.52 378.49 760.9 376.7 750.34 390.36 742.5 403.74 743.18 407.92 740.78 416.03 736.4 421.17 731.39 431.26 727.32 431.77 723.77 443.48 676.7 417.14 678.7 413.08 685.09 391.6 676.41 385.75 665.31 381.15 657.87 380.67 662.34 371.65 662.55 363.12 667.75 353.88 670.41 345.94 673.66 341.73 684.4 332.14 695.21 325.79 706.01 321.54 712.49 320.44 734 320.5 749.2 309.74 760.01 300.74 768.02 295.39 774.7 295.32 783.96 292.36 785.02 305.21 790.04 315.55 Z"/>
        </>
    );
};

