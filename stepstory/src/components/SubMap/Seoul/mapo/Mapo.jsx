import React, { useState } from 'react';
import './mapo.scss';

export default function Mapo () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_mapo').forEach((paw_mapo) => {
            paw_mapo.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_mapo').forEach((paw_mapo) => {
            paw_mapo.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='mapo'
            className={`area_mapo ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  
            d="M 263.52 300 275.5 310.42 294.57 321.49 306.54 325 313.27 330.64 310.51 335.54 310 341.35 329.52 350.44 338.13 347.04 366.4 345.14 372.01 345.57 376.9 341.43 380.05 346.95 377.02 351.01 378.15 359.64 380.99 363.52 373.76 371.59 369.33 374.48 367.7 382.89 365.28 388.06 356.08 395.91 344.93 398.73 343.94 401.56 332.5 391.79 326.38 388.12 324.14 386.75 316.87 383.26 314.08 386.16 313 387.29 310.67 388.78 302.56 384.94 301.77 383.01 300.6 382.99 291.71 382.94 290.99 382.94 290.96 382.94 268.27 382.82 268.24 382.82 268.2 382.78 260.8 371.86 260.8 371.85 260.79 371.83 257.11 366.97 249.01 363.6 236.8 356.77 223.76 348.08 222 346.97 200.14 333.06 195.09 330.56 175.71 315.13 171.1 309.48 171.13 304.67 181.95 301.3 192.75 296.03 214.34 294.47 216.97 290.74 215.15 287.11 216.91 275.19 219.95 273.95 222.31 267.42 225.58 264.36 238.18 278.91 263.52 300 Z"/>
        </>
    );
};

