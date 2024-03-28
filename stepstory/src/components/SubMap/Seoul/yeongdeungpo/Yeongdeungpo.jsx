import React, { useState } from 'react';
import './yeongdeungpo.scss';

export default function Yeongdeungpo () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_yeongdeungpo').forEach((paw_yeongdeungpo) => {
            paw_yeongdeungpo.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_yeongdeungpo').forEach((paw_yeongdeungpo) => {
            paw_yeongdeungpo.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>   
            <path 
            id='yeongdeungpo' 
            className={`area_yeongdeungpo ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}   
            d="M 222 346.97 223.76 348.08 236.8 356.77 249.01 363.6 257.11 366.97 260.79 371.83 260.8 371.85 260.8 371.86 268.2 382.78 268.24 382.82 268.27 382.82 290.96 382.94 290.99 382.94 291.71 382.94 300.6 382.99 301.77 383.01 302.56 384.94 310.67 388.78 313 387.29 314.08 386.16 316.87 383.26 324.14 386.75 326.38 388.12 332.5 391.79 343.94 401.56 353.94 417.78 353.2 440.29 333.57 443.87 320.41 444.99 309.87 445 309.69 451.57 307.01 452.21 295.38 487.86 280.85 491.89 278.99 495.68 264.26 517.82 254.64 513.1 250.83 507.35 244.5 473.86 246.97 469.82 242.7 457.1 234.75 450.17 229.22 448.87 225.64 443.94 219.54 439.09 217.07 435.79 219.48 432.33 217.97 421.62 221.99 419.95 228.65 413.08 234.4 409.47 240.09 399.49 232.73 386.13 230.61 378.04 221.69 365.69 217.32 357.87 217.17 353.69 222 346.97 Z"/>
        </>
    );
};

