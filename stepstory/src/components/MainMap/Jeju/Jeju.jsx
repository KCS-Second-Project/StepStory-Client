import React, { useState } from 'react';

export default function Jeju () {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_jj').forEach((paw_jj) => {
            paw_jj.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_jj').forEach((paw_jj) => {
            paw_jj.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };
    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_jj" viewBox="0 0 249 209.32">
                    <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path
            id='jeju'
            className={`area_jj ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 591.13 666.25 586.81 659.78 570.94 650.97 564.35 638.83 565.32 622.47 575.7 607.89 586.18 596.98 592.72 592.61 596.29 586.59 611.05 573.84 634.04 567.52 645.09 565.55 651.2 562.5 662.11 559.88 674.33 554.64 681.31 552.02 693.53 549.4 700.51 546.79 713.17 545.04 728.44 540.24 740.13 542.31 752.91 540.68 764.01 543.98 780.81 552.02 789.94 555.08 796.12 563.59 799 588.63 791.28 609.2 782 617.99 772.24 627.45 765.97 633.64 753.44 635.29 737.17 643.24 715.57 648.51 706.62 656.33 695.76 658.05 674.43 658.91 659.32 663.99 644.65 666.8 631.56 671.61 619.78 668.99 612.8 670.73 603.52 671.75 591.13 666.25 Z"/>
        </>
    );
};

