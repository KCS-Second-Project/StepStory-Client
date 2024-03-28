import React, { useState } from 'react';

export default function Dongdaemun ()  {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
		document.querySelectorAll('.paw_dongdaemun').forEach((paw_dongdaemun) => {
            paw_dongdaemun.classList.remove('disappear'); // 발자국에 disappear 클래스 제거
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.querySelectorAll('.paw_dongdaemun').forEach((paw_dongdaemun) => {
            paw_dongdaemun.classList.add('disappear'); // 발자국에 disappear 클래스 추가
        });
    };
    
    return (
        <>
            <svg id="svg-sprite">
                <symbol id="paw_dongdaemun" viewBox="0 0 249 209.32">
                    <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                </symbol>
            </svg>
            <path 
            id='dongdaemun'
            className={`area_dongdaemun ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            d="M 587.96 340.17 585.05 338.67 562.01 334.42 541.5 315.02 530 308.77 515.27 312.47 513.11 314.56 509.68 316.25 502.85 314.75 494.7 311.13 494.65 311.11 494.44 302.86 494.44 302.72 494.4 301.62 494.37 300.2 494.32 297.86 494.3 297.26 494.29 296.5 494.45 296.29 494.54 296.07 494.54 295.63 494.61 295.53 494.65 295.49 494.67 295.48 494.71 295.44 495.38 294.87 495.66 294.63 495.68 294.61 495.69 294.6 495.72 294.58 496.13 294.22 496.72 293.72 496.92 293.57 497.81 292.83 498.18 292.53 499.02 291.82 500.68 290.39 500.82 290.27 505.42 286.35 505.5 286.25 505.55 286.22 506.26 285.64 506.55 285.41 508.68 282.46 509.26 281.66 509.36 281.51 509.67 280.85 509.71 280.76 509.79 280.59 510 280.31 510.12 280.14 510.14 280.12 510.18 280.03 510.41 279.6 510.48 279.44 510.5 279.38 510.54 279.19 510.58 279.02 510.65 279 510.7 279.03 510.71 279.02 510.78 279 511.12 278.8 511.18 278.74 511.37 278.61 511.42 278.59 511.49 278.54 511.55 278.47 511.8 278.3 511.84 278.28 511.85 278.26 511.77 278.09 511.72 278.04 511.7 278.02 511.6 277.96 511.54 277.95 514.47 274.44 514.88 273.88 515.13 273.61 515.68 273.01 515.76 272.93 516.01 272.65 516.11 272.54 516.25 272.39 516.31 272.32 519.05 268.68 519.51 267.67 519.58 267.61 519.53 266.98 519.53 266.95 519.52 266.89 519.51 266.8 519.38 265.27 519.4 265.11 521.62 265.01 524.07 265.01 528.08 255.34 528.68 254.71 528.81 254.79 528.84 254.81 530.15 252.55 530.18 252.56 530.63 252.37 530.75 252.32 535.49 252.79 535.75 252.81 535.76 252.8 535.77 252.8 536.18 252.62 537.18 252.22 537.71 252.65 539.54 253.59 540.56 253.33 544.39 246.55 544.43 246.47 544.59 246.18 545.25 244.73 549.17 242.99 549.71 243.81 564.74 238.38 564.94 238.11 565.09 237.43 565.02 236.93 565.65 236.07 566.19 235.79 566.29 235.91 567.59 234.1 568.53 232.6 568.59 232.54 568.7 232.53 568.85 232.54 568.97 232.46 569 232.44 568.98 232.22 569.02 231.99 569.04 232 569.12 231.96 570.74 231.7 570.76 231.7 578.95 229.17 579.03 229.13 581.51 228.1 581.52 228.09 582.15 227.77 582.26 227.66 583.65 226.9 583.74 226.92 583.9 226.95 584.04 226.93 584.42 227.49 584.5 227.49 584.6 227.48 584.63 227.49 584.93 226.71 585.02 226.45 585.95 226.08 589.34 241.17 582.85 250.92 582.72 256 585.14 263.74 584.18 268.36 588.74 276.64 587.8 280.35 594.72 289.99 595.93 293.82 597.34 309.2 599.18 311.72 596.61 321.14 591.27 329.11 587.96 340.17 Z"/>
        </>
    );
};
