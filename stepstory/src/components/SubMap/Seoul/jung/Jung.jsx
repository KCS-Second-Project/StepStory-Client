import React, { useState } from 'react';
import './jung.scss';

export default function Jung () {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_jung').forEach((paw_jung) => {
            paw_jung.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_jung').forEach((paw_jung) => {
            paw_jung.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };

    return (
        <>
            <path 
            id='jung' 
            className={`area_jung ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            d="M 494.65 311.11 494.7 311.13 494.9 322.5 494.91 323.08 494.9 323.25 494.9 323.28 494.98 327.24 501.08 327.6 500.54 331.6 494.48 338.04 491.48 345.57 491.36 345.53 487.25 345.59 487.44 346.14 484.41 347.06 484.02 347.47 480.81 356.79 480.34 357.29 480.25 357.39 480.1 357.58 468.26 368.48 465.31 375.24 466.89 377.46 466.52 382.6 459.35 372.54 461.49 367.72 458.1 362.87 446.63 364.04 442.85 369.4 439.23 369.29 432.12 360.56 426.43 359.73 422.07 354.31 419.41 355.89 409.45 353.33 404.93 355.69 397.28 351.37 391.18 349.46 384.5 353.03 378.17 358.99 377.02 351.01 380.05 346.95 376.69 341.63 391.77 334.35 386.55 325.12 386.87 324.72 386.91 324.67 391.15 319.34 399 316.82 405.04 316.45 431.28 319.82 443.62 318.57 444.04 318.52 444.4 318.47 451.58 316.95 452.57 316.73 477.94 316.28 478.11 316.28 483.65 315.14 483.97 314.94 489.71 311.55 494.65 311.11 Z"/>
        </>
    );
};

