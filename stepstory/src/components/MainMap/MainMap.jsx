import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import sampledata from './mapData.json'
import './style.scss';

export default function EditMap3 ()  {

    const [data, setData] = useState(null);
    //지역별 게시글 수 
    
    useEffect(() =>{
        if(sampledata){
            setData(sampledata[0].data);
        }
    },[data])
    
    useEffect(() => {
        if(data){
            console.log(data);
            console.log(Object.keys(data))
            console.log(Object.values(data))
            //<svg>영역 svg로 지정
            const svg = d3.select('svg'); 


            //svg 영역 안의 Group g지정     
            const g = svg.select('#TotalMap');

            // key, value 배열화
            const district = Object.keys(data);
            const postCount = Object.values(data);

            console.log(district[0])
            console.log(postCount[0])

            // // //게시글 수에 따른 지역색 배정 
            const maxCount = d3.max(postCount);
            const meanCount = d3.mean(postCount);
            const minCount = d3.min(postCount);


            const rankColor2 = d3.scaleLinear()
                .domain([minCount,meanCount, maxCount])
                .range(['green','greenyellow','yellow']);

            //게시글 수에 따른 시각화 색 설정
            district.forEach((d, i) => {
                g.select(`#${d}`).attr('fill', rankColor2(postCount[i]));
            });
            

        }
    },[data])

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="800" height="728" viewBox="0 0 800 728" stroke-linecap="round" stroke-linejoin="round">
                <g id="TotalMap">
                    <path id='DokdoAndUlleungdo' d="M 688.23 201.14 689.92 202.42 692.54 203.22 694.78 206.04 697.65 206.43 696.22 208.96 692.69 208.3 689.01 211.57 689.13 213.68 689.56 216.84 686.76 218.14 681.85 214.6 678.16 216.76 674.49 213.35 676.15 211.72 677.88 212.23 679.85 208.43 679.51 205.73 681.17 201.77 683.57 199 686.86 197.41 689.33 198.51 688.23 201.14 Z M 663.82 183.25 666.86 184.89 668.31 189.09 668.32 191.51 672.15 196.28 670.68 198.95 671.91 200.94 669.4 202.04 667.33 204.06 667.95 205.29 666.21 207.57 662.16 206.46 660.25 207.22 656.36 206.2 654.4 203.97 655.83 198.9 653.38 196.73 652.66 194.95 657.25 193.37 658.58 191.15 660.12 193.11 663.33 189.96 662.56 183.65 663.82 183.25 Z M 604.19 155 605.71 156.59 606.97 161.22 605.19 165.85 606.27 169.13 609.31 172.2 609.35 174.53 608.05 176.36 608.82 179.81 606.79 181.78 608.53 187 610.89 187.85 604.55 192.91 601.51 192.82 599.17 193.92 594.41 198.58 593.36 202.44 585.54 201.32 583.22 199.66 580.46 199.76 575.75 198.55 574.09 196.35 571.36 195.46 567.11 195.29 565.52 191.88 563.49 190.55 562.52 187.52 563.95 182.88 563.71 180.32 562.2 177.62 559.19 175.41 558.49 172.09 562.07 172.37 563.87 170.74 567.02 170.22 568.39 168.46 573.7 167.6 574.42 166.31 580.25 163.1 584.38 163.4 588.65 162.13 591.96 158.71 599.05 159.17 600.46 156.86 604.19 155 Z" fill-rule="evenodd"/>                               
                    <path id='jeju' d="M 591.13 666.25 586.81 659.78 570.94 650.97 564.35 638.83 565.32 622.47 575.7 607.89 586.18 596.98 592.72 592.61 596.29 586.59 611.05 573.84 634.04 567.52 645.09 565.55 651.2 562.5 662.11 559.88 674.33 554.64 681.31 552.02 693.53 549.4 700.51 546.79 713.17 545.04 728.44 540.24 740.13 542.31 752.91 540.68 764.01 543.98 780.81 552.02 789.94 555.08 796.12 563.59 799 588.63 791.28 609.2 782 617.99 772.24 627.45 765.97 633.64 753.44 635.29 737.17 643.24 715.57 648.51 706.62 656.33 695.76 658.05 674.43 658.91 659.32 663.99 644.65 666.8 631.56 671.61 619.78 668.99 612.8 670.73 603.52 671.75 591.13 666.25 Z"/>
                    <path id='seoul' d="M 146.87 154.4 137.84 161.05 127.75 154.44 121.19 159.65 112.84 160.54 108.25 150.93 100.37 152.02 98.1 129.54 112.11 131.64 114.47 121.22 124.12 123.04 129.86 110.62 141.83 113 152.63 131.2 148.56 145.46 146.87 154.4 Z"/>
                    <path id='gyeonggi' d="M 59.07 143.71 65.16 149.57 53.95 154.04 44.23 162.28 34.87 158.74 31.31 153.52 40.48 148.3 59.07 143.71 Z M 69.12 137.78 61.31 127.06 57.36 115.32 57.93 100.99 77.63 95.44 81.12 80.95 79.23 62.28 100.88 55.05 106.07 48.07 106.73 36.5 120.87 25.21 125.94 17.39 144.54 9.76 153.92 16.45 155.93 24.63 175.36 37.23 183.93 32.81 193.07 34.61 195.58 51.79 207.77 54.86 208.88 61.24 217.04 63.38 219.21 72.54 206.23 84.95 205.17 94.45 211.06 107.33 210.71 124.46 218.08 120.45 232.81 132.3 239.82 131.32 253.68 138.58 240.64 147.8 247.18 161.14 241.1 172.75 241.92 184.06 239.14 200.44 230.1 216.62 222.49 215.58 221.61 223.94 206.78 231.68 195.92 233.37 191.19 241.59 186 242.3 171.28 263.21 159.76 254.96 157.04 250.91 143.62 247.13 138.06 253.11 124.64 254.42 103.85 258.09 74.8 199.33 80.42 192.46 85.04 183.91 69.06 168.96 69.12 137.78 Z M 146.87 154.4 148.56 145.46 152.49 131.34 141.83 113 129.86 110.62 123.84 123.31 114.47 121.22 112.11 131.64 97.96 129.82 100.37 152.02 108.25 150.93 112.84 160.54 121.19 159.65 127.75 154.44 137.84 161.05 146.87 154.4 Z M 43.35 85.89 54.46 94.9 56.52 119.32 54.65 129.64 38.65 129.9 34.81 122 33.19 116.94 31.83 108.8 31.27 93.28 43.35 85.89 Z" fill-rule="evenodd"/>
                    <path id='chungbuk' d="M 200.74 384.5 200.75 384.24 200.75 384.22 200.7 383.67 200.76 383.55 200.39 383.19 200.26 383 200.26 382.9 200.24 382.8 200.1 382.32 200.06 382.2 199.99 381.98 200.05 381.89 200.16 381.74 200.33 381.54 200.28 381.12 200.33 380.83 199.94 380.61 199.78 380.48 199.84 380 199.86 379.99 200.01 379.39 200.1 379.03 200.15 379.02 200.39 378.82 200.36 378.76 200.34 378.72 200.31 378.59 200.27 378.54 200.27 378.54 200.26 378.4 200.24 378.34 200.22 378.24 200.19 378.12 200.21 377.95 200.27 377.89 200.31 377.87 200.34 377.86 200.39 377.83 200.45 377.78 200.46 377.78 200.53 377.68 200.75 377.49 200.81 377.33 200.95 377.19 201.12 377 201.42 376.68 201.67 376.16 201.69 376.03 201.52 375.67 201.51 375.58 201.31 375.23 201.23 375.18 201.18 374.82 201.2 374.75 201.06 374.52 201.02 374.47 200.9 374.15 200.77 373.93 200.76 373.84 200.7 373.72 200.63 373.62 200.53 373.46 200.57 373.33 200.58 373.19 200.6 373.03 200.7 372.96 200.73 372.87 200.82 372.81 201.04 372.74 201.26 373.01 201.34 372.69 201.35 372.69 201.46 372.45 201.65 371.96 201.71 371.84 201.71 371.82 201.69 371.72 201.68 371.64 201.29 370.91 201.12 370.72 201.05 370.66 201.33 370.31 201.4 370.21 201.44 370.08 201.51 369.89 201.54 369.83 201.48 369.7 201.44 369.59 201.41 369.55 201.41 369.31 201.7 369.06 201.86 368.98 201.93 368.86 201.97 368.76 202.04 368.68 202.1 368.63 202.14 368.5 202.23 368.31 202.26 368.24 202.28 368.2 202.3 368.15 202.31 368.06 202.3 367.97 202.2 367.7 202.12 367.26 202.1 367.02 202.11 366.9 202.01 366.71 202.06 366.54 202.06 366.53 202.06 366.36 202.1 366.13 202.06 366.05 201.95 365.62 201.95 365.6 201.95 365.55 202.02 365.46 202.18 365.36 202.25 365.34 202.45 365.26 202.61 365.24 202.54 365.08 202.6 365.03 202.68 365 202.89 364.9 203.06 364.72 203.08 364.58 202.99 364.3 203 364.25 203.35 364.17 203.44 364.21 203.7 364.26 203.78 364.07 203.83 364.03 203.84 364.02 204.48 363.92 204.46 363.73 204.51 363.64 204.7 363.51 204.86 363.39 204.91 363.34 205.12 362.93 205.14 362.85 205.24 362.76 205.29 362.6 205.35 362.43 205.33 362.28 205.28 362.23 205.21 362.03 205.34 361.81 205.45 361.67 205.51 361.49 205.56 361.36 205.54 361.29 205.57 361.07 205.63 361 205.62 360.93 205.57 360.74 205.56 360.63 205.54 360.51 205.62 360.47 205.77 360.21 205.8 359.52 205.79 359.43 205.62 358.71 205.67 358.55 205.67 358.55 205.78 358.14 205.7 358 205.66 357.54 205.69 357.1 205.58 356.73 205.67 356.52 205.84 356.55 205.92 356.51 205.96 356.44 206.1 356.31 206.18 356.26 206.26 356.05 206.35 355.94 206.42 355.88 206.43 355.85 206.48 355.84 206.53 355.84 206.67 355.9 206.93 355.71 206.95 355.6 206.96 355.52 206.91 355.51 206.92 355.41 207.09 355.32 207.36 355.18 207.53 355.15 208.62 354.92 209.43 354.79 209.55 355.01 209.59 355.1 210.09 355.14 210.55 354.7 210.81 354.61 210.89 354.53 210.78 354.3 210.75 354.23 210.66 354.26 210.65 354.26 210.48 354.28 210.47 354.28 210.19 354.18 210.18 354.18 210.11 354.12 210.05 354.08 210.02 354.06 210.01 354.05 210 354.04 209.71 353.3 209.71 353.3 209.61 353.09 209.5 352.94 209.48 352.92 209.37 352.84 209.2 352.75 209.1 352.67 209.08 352.66 209 352.63 208.98 352.62 208.98 352.62 208.83 352.58 208.19 351.27 208.24 350.58 207.8 350.38 207.65 350.43 207.58 350.44 207.52 350.4 207.39 350.46 207.19 350.66 206.95 350.61 206.84 350.61 206.22 350.5 206.21 350.4 206.04 350.24 205.95 350.24 205.95 350.24 205.83 350.29 205.79 350.17 205.8 350.1 205.54 349.82 205.41 349.87 205.32 349.98 204.98 350.26 204.93 350.39 204.75 350.45 204.75 350.42 204.54 350.25 204.51 350.18 204.42 350.1 204.39 350.08 204.39 350.08 204.37 350.07 204.36 350.04 204.31 350 204.24 350 204.06 350 203.93 350.57 203.92 350.59 203.85 350.93 203.78 351.24 203.58 352.14 203.57 352.18 203.53 352.28 203.48 352.35 203.41 352.45 203.39 352.48 203.3 352.59 202.85 352.66 202.22 352.61 202.1 352.58 201.86 351.95 201.81 351.83 201.78 351.77 201.58 351.48 201.53 351.41 201.44 351.18 201.43 351.14 201.43 351.12 201.41 350.71 201.41 350.56 201.34 350.4 201.29 350.22 201.06 349.67 200.9 349.45 200.82 349.29 200.79 349.21 200.75 349.11 200.72 349.06 200.7 349 200.64 348.89 200.61 348.81 200.52 348.6 200.49 348.53 200.38 348.23 200.31 347.82 200.43 347.53 200.48 347.41 200.72 346.84 200.75 346.79 200.77 346.74 200.8 346.67 200.81 346.65 200.92 346.46 200.93 346.45 201.28 346.03 201.31 346 201.41 345.87 201.44 345.84 201.76 345.57 201.77 345.56 201.86 345.47 202.01 345.34 202.03 345.31 202.07 345.28 202.23 345.13 202.27 345.09 202.31 345.05 202.44 344.82 202.54 344.5 202.54 344.5 202.32 343.88 202.29 343.82 201.96 343.69 201.78 343.76 201.58 343.84 201.58 343.84 201.53 343.86 201.5 343.87 201.5 343.87 201.49 343.87 201.49 343.88 201.47 343.88 201.45 343.89 201.38 343.92 201.33 343.94 200.96 344.08 200.89 344.11 200.44 344.25 199.53 344.3 199.32 344.2 199.17 344.13 198.86 343.8 198.77 343.73 198.57 343.47 198.53 343.38 198.48 343.28 198.47 343.18 198.46 343.15 198.47 343.06 198.48 342.96 198.54 342.76 198.58 342.66 198.62 342.61 198.69 342.48 198.7 342.46 198.7 342.43 198.71 342.4 198.76 342.28 198.86 342.11 198.92 342.05 198.96 342 198.97 341.99 198.98 341.97 199.05 341.86 199.1 341.76 199.1 341.74 199.11 341.73 199.12 341.7 199.12 341.69 199.13 341.68 199.14 341.65 199.14 341.64 199.14 341.63 199.17 341.55 199.18 341.53 199.18 341.51 199.19 341.5 199.19 341.5 199.2 341.46 199.24 341.39 199.25 341.37 199.26 341.34 199.28 341.3 199.31 341.21 199.32 341.17 199.36 341.05 199.4 340.86 199.42 340.75 199.49 340.45 199.5 340.42 199.52 340.34 199.53 340.24 199.49 340.07 199.48 340.01 199.47 339.95 199.46 339.88 199.02 339.78 198.97 339.77 198.94 339.76 198.26 339.93 197.97 340.05 197.61 340.23 197.38 340.42 197.27 340.58 196.8 341.18 196.78 341.23 196.76 341.29 196.75 341.31 196.74 341.33 196.72 341.38 196.69 341.46 196.66 341.53 196.63 341.6 196.61 341.65 196.57 341.73 196.57 341.73 196.46 341.98 196.43 342.06 196.4 342.14 196.39 342.17 196.37 342.35 196.37 342.44 196.36 342.92 196.35 342.95 196.22 343.7 196.2 343.72 196.15 343.79 196.1 343.85 195.97 344.01 195.61 344.39 195.54 344.45 195.43 344.53 195.3 344.62 195.2 344.69 194.97 344.82 194.91 344.85 194.84 344.87 194.75 344.9 194.7 344.92 194.58 344.97 194.28 344.99 193.89 345 193.78 344.94 193.62 344.86 193.6 344.85 193.4 344.76 193.3 344.7 193.25 344.67 193.17 344.61 193.16 344.6 193.1 344.52 193.06 344.47 193.05 344.45 193.01 344.39 192.98 344.36 192.91 344.29 192.86 344.24 192.81 344.19 192.71 344.08 192.67 344.03 192.65 344.01 192.61 343.97 192.47 343.83 192.45 343.8 191.89 343.77 191.91 343.7 191.92 343.7 192.06 343.71 192.25 343.71 192.35 343.72 192.32 343.65 192.18 343.64 192.11 343.64 191.89 343.63 191.6 343.61 191.39 343.6 191.33 343.59 190.92 343.57 190.49 343.69 190.48 343.7 190.35 343.72 189.77 343.84 189.62 343.87 189.46 343.9 189.4 343.92 189.34 343.93 189.28 343.94 189.22 343.95 189.14 343.96 188.89 343.96 188.73 343.95 188.58 343.95 188.1 343.96 187.97 343.96 187.83 343.94 187.71 343.93 187.23 343.85 187.15 343.8 186.8 343.86 186.75 343.79 186.7 343.74 186.65 343.65 186.66 343.63 186.65 343.58 186.67 343.56 186.67 343.5 186.68 343.45 186.69 343.44 186.73 342.69 186.69 342.56 186.63 342.41 186.63 342.38 186.61 342.2 186.61 342.18 186.7 342.07 186.7 342.02 186.64 341.79 186.58 341.74 186.55 341.69 186.52 341.57 186.51 341.55 186.49 341.4 186.49 341.33 186.5 341.32 186.48 341.27 186.51 341.2 186.51 341.03 186.52 340.96 186.51 340.88 186.52 340.82 186.53 340.74 186.55 340.66 186.58 340.62 187.13 340.53 187.2 340.37 187.4 339.88 187.4 339.7 187.27 338.41 187.14 338.12 186.49 337.39 186.3 337.18 186.26 337.12 186.19 337.04 187.06 327.78 177.22 322.39 172.68 316.39 170.11 305.67 173.16 294 187.09 280.3 170.39 262.09 186 242.3 191.19 241.59 195.92 233.37 206.78 231.68 221.61 223.94 222.49 215.58 230.1 216.62 238.2 201.9 245.66 215.01 266.75 208.97 273.6 193.51 279.49 196.08 282.24 206.37 301.18 201.76 307.68 195.07 316.8 202.65 317.17 211.28 334.23 211.81 340.12 222.02 348.31 220.65 371.04 227.05 364.08 233.1 343.23 254.89 340.67 264.42 344.49 269.75 340.26 276.58 325.28 275.95 313.32 265.44 309.55 276.67 299.8 274.72 291.03 278.59 286 276.02 281.97 288.98 270.64 291.28 266.46 299.65 266.89 312.15 254.29 312.05 246.88 319.27 257.73 324.33 261.68 329.55 256.86 353.53 259.74 364.2 253.56 371.28 272.76 382.02 279.11 389.65 273.91 393.72 276.01 404.01 271.82 415.68 255.44 421.59 242.3 426.66 225.07 418.3 215.43 403.85 216.72 388.4 206.8 382.08 200.74 384.5 Z"/>
                    <path id='chungnam' d="M 200.74 384.5 206.8 382.08 216.72 388.4 215.43 403.85 219.74 409.76 207.58 422.92 204.87 432.13 195.3 432.12 192.33 427.25 183.11 424.71 177.61 404.86 157.25 410.12 144.67 416.87 135.17 411.29 132.11 402.78 116.78 400.57 108.17 404.15 106.36 416.09 85.87 428.46 76.86 426.78 64.03 404.22 51.43 399.82 57.62 378.11 51.13 367.78 57.55 361.87 52.22 357.01 47.81 336.87 49.17 329.74 44.53 316.84 35.84 312.28 24.66 313.99 13.84 306.03 9.56 301.61 4.42 298.33 1 293.48 1.21 285.76 7.65 259.59 13.27 257.5 23.57 262.56 34.58 253.54 37.66 245.68 44.43 240.01 49.65 230.42 74.61 199.03 103.95 257.98 124.64 254.42 138.06 253.11 143.62 247.13 157.04 250.91 167.83 258.37 187.09 280.3 173.16 294 170.11 305.67 172.68 316.39 177.22 322.39 187.06 327.78 186.19 337.04 186.26 337.12 186.3 337.18 186.49 337.39 187.14 338.12 187.27 338.41 187.4 339.7 187.4 339.88 187.2 340.37 187.13 340.53 186.58 340.62 186.55 340.66 186.53 340.74 186.52 340.82 186.51 340.88 186.52 340.96 186.51 341.03 186.51 341.2 186.48 341.27 186.5 341.32 186.49 341.33 186.49 341.4 186.51 341.55 186.52 341.57 186.55 341.69 186.58 341.74 186.64 341.79 186.7 342.02 186.7 342.07 186.61 342.18 186.61 342.2 186.63 342.38 186.63 342.41 186.69 342.56 186.73 342.69 186.69 343.44 186.68 343.45 186.67 343.5 186.67 343.56 186.65 343.58 186.66 343.63 186.65 343.65 186.7 343.74 186.75 343.79 186.8 343.86 187.15 343.8 187.23 343.85 187.71 343.93 187.83 343.94 187.97 343.96 188.1 343.96 188.58 343.95 188.73 343.95 188.89 343.96 189.14 343.96 189.22 343.95 189.28 343.94 189.34 343.93 189.4 343.92 189.46 343.9 189.62 343.87 189.77 343.84 190.35 343.72 190.48 343.7 190.49 343.69 190.92 343.57 191.33 343.59 191.39 343.6 191.6 343.61 191.89 343.63 192.11 343.64 192.18 343.64 192.32 343.65 192.35 343.72 192.25 343.71 192.06 343.71 191.92 343.7 191.91 343.7 191.89 343.77 192.45 343.8 192.47 343.83 192.61 343.97 192.65 344.01 192.67 344.03 192.71 344.08 192.81 344.19 192.86 344.24 192.91 344.29 192.98 344.36 193.01 344.39 193.05 344.45 193.06 344.47 193.1 344.52 193.16 344.6 193.17 344.61 193.25 344.67 193.3 344.7 193.4 344.76 193.6 344.85 193.62 344.86 193.78 344.94 193.89 345 194.28 344.99 194.58 344.97 194.7 344.92 194.75 344.9 194.84 344.87 194.91 344.85 194.97 344.82 195.2 344.69 195.3 344.62 195.43 344.53 195.54 344.45 195.61 344.39 195.97 344.01 196.1 343.85 196.15 343.79 196.2 343.72 196.22 343.7 196.35 342.95 196.36 342.92 196.37 342.44 196.37 342.35 196.39 342.17 196.4 342.14 196.43 342.06 196.46 341.98 196.57 341.73 196.57 341.73 196.61 341.65 196.63 341.6 196.66 341.53 196.69 341.46 196.72 341.38 196.74 341.33 196.75 341.31 196.76 341.29 196.78 341.23 196.8 341.18 197.27 340.58 197.38 340.42 197.61 340.23 197.97 340.05 198.26 339.93 198.94 339.76 198.97 339.77 199.02 339.78 199.46 339.88 199.47 339.95 199.48 340.01 199.49 340.07 199.53 340.24 199.52 340.34 199.5 340.42 199.49 340.45 199.42 340.75 199.4 340.86 199.36 341.05 199.32 341.17 199.31 341.21 199.28 341.3 199.26 341.34 199.25 341.37 199.24 341.39 199.2 341.46 199.19 341.5 199.19 341.5 199.18 341.51 199.18 341.53 199.17 341.55 199.14 341.63 199.14 341.64 199.14 341.65 199.13 341.68 199.12 341.69 199.12 341.7 199.11 341.73 199.1 341.74 199.1 341.76 199.05 341.86 198.98 341.97 198.97 341.99 198.96 342 198.92 342.05 198.86 342.11 198.76 342.28 198.71 342.4 198.7 342.43 198.7 342.46 198.69 342.48 198.62 342.61 198.58 342.66 198.54 342.76 198.48 342.96 198.47 343.06 198.46 343.15 198.47 343.18 198.48 343.28 198.53 343.38 198.57 343.47 198.77 343.73 198.86 343.8 199.17 344.13 199.32 344.2 199.53 344.3 200.44 344.25 200.89 344.11 200.96 344.08 201.33 343.94 201.38 343.92 201.45 343.89 201.47 343.88 201.49 343.88 201.49 343.87 201.5 343.87 201.5 343.87 201.53 343.86 201.58 343.84 201.58 343.84 201.78 343.76 201.96 343.69 202.29 343.82 202.32 343.88 202.54 344.5 202.54 344.5 202.44 344.82 202.31 345.05 202.27 345.09 202.23 345.13 202.07 345.28 202.03 345.31 202.01 345.34 201.86 345.47 201.77 345.56 201.76 345.57 201.44 345.84 201.41 345.87 201.31 346 201.28 346.03 200.93 346.45 200.92 346.46 200.81 346.65 200.8 346.67 200.77 346.74 200.75 346.79 200.72 346.84 200.48 347.41 200.43 347.53 200.31 347.82 200.38 348.23 200.49 348.53 200.52 348.6 200.61 348.81 200.64 348.89 200.7 349 200.72 349.06 200.75 349.11 200.79 349.21 200.82 349.29 200.9 349.45 201.06 349.67 201.29 350.22 201.34 350.4 201.41 350.56 201.41 350.71 201.43 351.12 201.43 351.14 201.44 351.18 201.53 351.41 201.58 351.48 201.78 351.77 201.81 351.83 201.86 351.95 202.1 352.58 202.22 352.61 202.85 352.66 203.3 352.59 203.39 352.48 203.41 352.45 203.48 352.35 203.53 352.28 203.57 352.18 203.58 352.14 203.78 351.24 203.85 350.93 203.92 350.59 203.93 350.57 204.06 350 204.24 350 204.31 350 204.36 350.04 204.37 350.07 204.39 350.08 204.39 350.08 204.42 350.1 204.51 350.18 204.54 350.25 204.75 350.42 204.75 350.45 204.93 350.39 204.98 350.26 205.32 349.98 205.41 349.87 205.54 349.82 205.8 350.1 205.79 350.17 205.83 350.29 205.95 350.24 205.95 350.24 206.04 350.24 206.21 350.4 206.22 350.5 206.84 350.61 206.95 350.61 207.19 350.66 207.39 350.46 207.52 350.4 207.58 350.44 207.65 350.43 207.8 350.38 208.24 350.58 208.19 351.27 208.83 352.58 208.98 352.62 208.98 352.62 209 352.63 209.08 352.66 209.1 352.67 209.2 352.75 209.37 352.84 209.48 352.92 209.5 352.94 209.61 353.09 209.71 353.3 209.71 353.3 210 354.04 210.01 354.05 210.02 354.06 210.05 354.08 210.11 354.12 210.18 354.18 210.19 354.18 210.47 354.28 210.48 354.28 210.65 354.26 210.66 354.26 210.75 354.23 210.78 354.3 210.89 354.53 210.81 354.61 210.55 354.7 210.09 355.14 209.59 355.1 209.55 355.01 209.43 354.79 208.62 354.92 207.53 355.15 207.36 355.18 207.09 355.32 206.92 355.41 206.91 355.51 206.96 355.52 206.95 355.6 206.93 355.71 206.67 355.9 206.53 355.84 206.48 355.84 206.43 355.85 206.42 355.88 206.35 355.94 206.26 356.05 206.18 356.26 206.1 356.31 205.96 356.44 205.92 356.51 205.84 356.55 205.67 356.52 205.58 356.73 205.69 357.1 205.66 357.54 205.7 358 205.78 358.14 205.67 358.55 205.67 358.55 205.62 358.71 205.79 359.43 205.8 359.52 205.77 360.21 205.62 360.47 205.54 360.51 205.56 360.63 205.57 360.74 205.62 360.93 205.63 361 205.57 361.07 205.54 361.29 205.56 361.36 205.51 361.49 205.45 361.67 205.34 361.81 205.21 362.03 205.28 362.23 205.33 362.28 205.35 362.43 205.29 362.6 205.24 362.76 205.14 362.85 205.12 362.93 204.91 363.34 204.86 363.39 204.7 363.51 204.51 363.64 204.46 363.73 204.48 363.92 203.84 364.02 203.83 364.03 203.78 364.07 203.7 364.26 203.44 364.21 203.35 364.17 203 364.25 202.99 364.3 203.08 364.58 203.06 364.72 202.89 364.9 202.68 365 202.6 365.03 202.54 365.08 202.61 365.24 202.45 365.26 202.25 365.34 202.18 365.36 202.02 365.46 201.95 365.55 201.95 365.6 201.95 365.62 202.06 366.05 202.1 366.13 202.06 366.36 202.06 366.53 202.06 366.54 202.01 366.71 202.11 366.9 202.1 367.02 202.12 367.26 202.2 367.7 202.3 367.97 202.31 368.06 202.3 368.15 202.28 368.2 202.26 368.24 202.23 368.31 202.14 368.5 202.1 368.63 202.04 368.68 201.97 368.76 201.93 368.86 201.86 368.98 201.7 369.06 201.41 369.31 201.41 369.55 201.44 369.59 201.48 369.7 201.54 369.83 201.51 369.89 201.44 370.08 201.4 370.21 201.33 370.31 201.05 370.66 201.12 370.72 201.29 370.91 201.68 371.64 201.69 371.72 201.71 371.82 201.71 371.84 201.65 371.96 201.46 372.45 201.35 372.69 201.34 372.69 201.26 373.01 201.04 372.74 200.82 372.81 200.73 372.87 200.7 372.96 200.6 373.03 200.58 373.19 200.57 373.33 200.53 373.46 200.63 373.62 200.7 373.72 200.76 373.84 200.77 373.93 200.9 374.15 201.02 374.47 201.06 374.52 201.2 374.75 201.18 374.82 201.23 375.18 201.31 375.23 201.51 375.58 201.52 375.67 201.69 376.03 201.67 376.16 201.42 376.68 201.12 377 200.95 377.19 200.81 377.33 200.75 377.49 200.53 377.68 200.46 377.78 200.45 377.78 200.39 377.83 200.34 377.86 200.31 377.87 200.27 377.89 200.21 377.95 200.19 378.12 200.22 378.24 200.24 378.34 200.26 378.4 200.27 378.54 200.27 378.54 200.31 378.59 200.34 378.72 200.36 378.76 200.39 378.82 200.15 379.02 200.1 379.03 200.01 379.39 199.86 379.99 199.84 380 199.78 380.48 199.94 380.61 200.33 380.83 200.28 381.12 200.33 381.54 200.16 381.74 200.05 381.89 199.99 381.98 200.06 382.2 200.1 382.32 200.24 382.8 200.26 382.9 200.26 383 200.39 383.19 200.76 383.55 200.7 383.67 200.75 384.22 200.75 384.24 200.74 384.5 Z"/>
                    <path id='jeonbuk' d="M 64.11 404.29 76.9 426.94 86.17 428.47 106.36 416.09 108.17 404.15 116.78 400.57 132.11 402.78 135.17 411.29 144.67 416.87 157.25 410.12 177.61 404.86 183.11 424.71 192.33 427.25 195.3 432.12 204.87 432.13 207.58 422.92 219.74 410.02 224.88 418.33 242.3 426.66 255.44 421.59 263.24 440.34 262.05 449.84 255.68 451.09 238.33 460.79 226.6 473.7 226.41 483.22 220.15 495.65 218.71 506.96 221.02 516.6 228.5 532.61 218.74 547.54 220.36 553.79 213.74 558.21 201.55 548.68 191.13 549.11 185.42 558.5 179.54 555.68 172.73 559.01 151.01 553.81 142.73 559.84 132.34 556.24 136.11 547.49 131.3 544.73 133.36 536.07 130.71 528.57 115.15 541.84 109.59 531.93 100.97 528.01 89.44 528.23 84.17 545.05 70.74 555.51 64.69 552.61 53.58 557.89 47.73 538.67 40.03 535.14 46.58 518.13 49.62 506.21 43.39 501.04 44.33 495.09 53.38 434.17 51.57 399.82 64.11 404.29 Z"/>
                    <path id='jeonnam' d="M 17.84 662.02 19.89 656.74 21.48 651.37 23.19 643.19 23.55 634.16 20.33 631.88 18.5 628.61 16.42 621.34 18.89 619.37 15.95 609.42 18.54 600.03 21.93 591.45 26.17 580.54 22.42 575.27 25.82 564.42 28.73 561.85 34.45 542.69 39.48 534.71 47.73 538.67 53.58 557.89 64.69 552.61 70.74 555.51 84.17 545.05 89.44 528.23 100.97 528.01 109.59 531.93 115.15 541.84 130.71 528.57 133.36 536.07 131.3 544.73 136.11 547.49 132.34 556.24 142.73 559.84 151.01 553.81 172.73 559.01 179.54 555.68 185.42 558.5 191.13 549.11 201.55 548.68 212.26 556.41 220.16 571.91 219.98 578.61 231.64 592.02 231.8 596.06 245.67 611.99 240.98 622.96 244.4 642.8 239.7 658.06 240.55 665.21 233.43 668.19 221.12 672.27 218.7 678.75 209.86 678.95 197.73 689.38 158.69 702.88 145.65 704.94 118.42 703.49 121.16 713.35 112.9 718 96.27 718.59 92.16 715.28 82.21 719.09 65 727 45.95 725.84 38.44 708.71 29.65 703.83 21.58 694.67 13.38 689.67 10.15 671.92 17.84 662.02 Z"/>
                    <path id='gyeongbuk' d="M 517.52 415.95 517.11 424.88 508.83 440.7 511.06 449.83 501.61 488.32 499.37 491.29 484.62 486.28 475.99 492.92 470.58 483.91 461.89 478.87 446.12 481.96 437.92 492.49 428.23 500.45 417.83 494.64 408.63 502.89 394.05 508.64 378.73 503.18 369.86 506.51 355.43 495.61 333.87 500.71 324.85 492.91 308.88 495.23 306.91 475.04 298.72 468.91 296.88 462.34 288.61 458.44 279.79 460.78 261.68 449.99 263.14 439.98 255.45 421.52 271.82 415.68 276.01 404.01 273.91 393.72 279.11 389.65 272.76 382.02 253.56 371.28 259.74 364.2 256.86 353.53 261.68 329.55 257.73 324.33 246.88 319.27 254.29 312.05 266.89 312.15 266.46 299.65 270.64 291.28 281.97 288.98 286 276.02 291.03 278.59 299.8 274.72 309.55 276.67 313.32 265.44 325.28 275.95 340.26 276.58 344.49 269.75 340.67 264.42 343.23 254.89 364.08 233.1 370.71 226.95 381.81 233.23 389.67 230.72 392.67 224.36 403.74 230.92 413.23 228.06 415.09 223.18 436.28 227.34 440.9 221.21 455.92 232.14 467.13 217.76 475.34 212.64 479.64 215.55 482.81 220.09 487.49 227.05 488.19 234.78 490.65 264.95 499.35 282.77 499.41 295.16 490.73 306.89 489.79 315.17 494.5 322.78 495.7 331.92 493.46 349.58 486.14 364.06 485.7 379.52 489.25 399.96 495.02 405.39 504.51 405.34 511.49 413.39 517.52 415.95 Z"/>
                    <path id='gyeongnam' d="M 378.37 600.79 372.01 604.2 364.53 608.34 355.89 612.44 347.1 621.17 329.42 623.8 323.73 628.82 318.21 627.27 310.5 630.3 304.35 631.75 294.15 631.92 287.32 629.04 277.97 623.99 273.76 623.82 269.39 626.41 265.83 627.22 261.95 631.43 255.15 636.61 244.31 642.92 240.91 623.34 245.67 611.99 231.8 596.06 231.64 592.02 219.98 578.61 220.16 571.91 213.53 558.74 220.36 553.79 218.74 547.54 228.5 532.61 221.02 516.6 218.71 506.96 220.15 495.65 226.41 483.22 226.6 473.7 238.33 460.79 255.68 451.09 261.79 449.84 279.79 460.78 288.61 458.44 296.88 462.34 298.72 468.91 306.91 475.04 308.88 495.23 324.85 492.91 333.87 500.71 355.43 495.61 369.86 506.51 378.73 503.18 394.05 508.64 408.63 502.89 417.83 494.64 428.23 500.45 437.92 492.49 446.12 481.96 461.89 478.87 470.58 483.91 475.99 492.92 484.62 486.28 499.5 491.37 501.76 503.43 498.4 521.98 484.28 526.39 486.52 546.83 475.85 553.45 466.43 578.9 459.95 584.83 450.54 585.11 449.67 594.67 436.22 596.69 422.05 596.69 407.41 598.99 398.93 598.74 385.41 596.68 378.37 600.79 Z"/>               
                    <path id='gangwon' d="M 363.84 13.83 366.67 27.9 384.58 50.24 393.52 66.82 406.37 85.37 433.03 113.8 433.03 123.9 442.32 131.73 443.42 142.54 453.74 155.2 455.12 162.07 463.23 168.49 465.84 179.14 471.36 186.73 475.66 196.19 476.63 204.36 475.06 212.76 467.13 217.76 455.92 232.14 440.9 221.22 436.23 227.27 415.07 223.17 413.23 228.06 403.74 230.92 392.67 224.36 389.67 230.72 381.81 233.23 370.92 226.94 348.31 220.65 340.12 222.02 334.23 211.81 317.17 211.28 316.8 202.65 307.68 195.07 301.18 201.76 282.24 206.37 279.49 196.08 273.6 193.51 266.75 208.97 245.8 215.15 238.2 201.62 241.92 184.06 241.1 172.75 247.18 161.14 240.64 147.8 253.68 138.58 239.82 131.32 232.81 132.3 218.08 120.45 210.71 124.46 211.06 107.33 205.17 94.45 206.23 84.95 219.21 72.54 217.04 63.38 208.88 61.24 207.77 54.86 195.58 51.79 193.07 34.61 183.93 32.81 175.36 37.23 155.93 24.63 153.88 16.39 144.86 10.56 154.57 5.16 178.19 5.22 193.68 5.34 208.2 4.25 224.92 3.15 239.99 2.33 247.66 1 255.06 2.02 263.28 1.23 273 2.29 305.21 4.25 322.75 4.79 337.54 6.44 363.84 13.83 Z"/>
                </g>
            </svg>
        </div>
    );
};
