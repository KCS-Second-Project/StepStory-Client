import React, { useState } from 'react';
import './yongsan.scss';

export default function Yongsan () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_yongsan').forEach((paw_yongsan) => {
            paw_yongsan.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_yongsan').forEach((paw_yongsan) => {
            paw_yongsan.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>   
            <path 
            id='yongsan' 
            className={`area_yongsan ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   
            d="M 391.15 349.46 397.28 351.37 404.92 355.69 409.45 353.33 419.41 355.89 422.07 354.31 426.43 359.73 432.12 360.56 439.23 369.29 442.85 369.4 446.63 364.04 458.1 362.87 461.49 367.72 459.35 372.54 466.43 382.57 468.66 388.83 476.15 389.63 483.1 393.06 482.88 401.81 461.86 426.9 450.95 436.33 431.59 451.56 421.7 467.17 407.63 467.07 402.06 465.94 382.51 456.74 375.33 450.38 363 444.15 353.82 440.55 353.94 417.78 343.94 401.56 344.93 398.73 356.08 395.91 365.28 388.06 367.7 382.89 369.33 374.48 373.76 371.59 380.99 363.52 378.05 359.23 384.5 353.03 391.15 349.46 Z"/>
         </>
    );
};

