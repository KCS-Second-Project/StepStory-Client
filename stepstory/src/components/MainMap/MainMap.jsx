import React, { useEffect, useState } from 'react';
import './mainMapStyle.scss';
import * as d3 from 'd3';
import sampledata from './mapData.json'

import DokdoAndUlleungdo from './DockdoAndUlleungdo/DokdoAndUlleungdo';
import Jeju from './Jeju/Jeju';
import Chungbuk from './Chungbuk/Chungbuk';
import Chungnam from './Chungnam/Chungnam';
import Gangwon from './Gangwon/Gangwon';
import Gyeongbuk from './Gyeongbuk/Gyeongbuk';
import Gyeongnam from './Gyeongnam/Gyeongnam';
import Gyeonggi from './Gyeonggi/Gyeonggi';
import Jeonbuk from './Jeonbuk/Jeonbuk';
import Jeonnam from './Jeonnam/Jeonnam';
import Seoul from './Seoul/Seoul';

import DaU from './DockdoAndUlleungdo/DaU';
import CB from './Chungbuk/CB';
import CN from './Chungnam/CN';
import GW from './Gangwon/GW';
import GG from './Gyeonggi/GG';
import GB from './Gyeongbuk/GB';
import GN from './Gyeongnam/GN';
import JJ from './Jeju/JJ';
import JB from './Jeonbuk/JB';
import JN from './Jeonnam/JN';
import SU from './Seoul/SU';

export default function MainMap ()  {

    const [data, setData] = useState(null);
    //지역별 게시글 수 
    
    useEffect(() =>{
        if(sampledata){
            setData(sampledata[0].data);
        }
    },[data])
    
    useEffect(() => {
        if(data){
            //<svg>영역 svg로 지정
            const svg = d3.select('svg'); 


            //svg 영역 안의 Group g지정     
            const g = svg.select('#TotalMap');

            // key, value 배열화
            const district = Object.keys(data);
            const postCount = Object.values(data);



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
        <div className='main-map'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="800" height="728" viewBox="0 0 800 728" stroke-linecap="round" stroke-linejoin="round">
                <g id="TotalMap">
                    <DokdoAndUlleungdo/>   
                    <Jeju/>  
                    <Seoul />           
                    <Gyeonggi />     
                    <Chungbuk />     
                    <Chungnam />
                    <Jeonbuk />
                    <Jeonnam />
                    <Gyeongbuk />
                    <Gyeongnam />
                    <Gangwon />
                </g>
            </svg>
            <DaU />
            <CB />
            <CN />
            <GW />
            <GG />
            <GB />
            <GN />
            <JJ />
            <JB />
            <JN />
            <SU />
        </div>
    );
};

