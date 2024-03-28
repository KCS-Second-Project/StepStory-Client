import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './seoulMapStyle.css';
import sampleData from './mapData.json';
import Dobong from './dobong/Dobong';
import DobongLoader from './dobong/DobongLoader';
import DongdaemunLoader from './dongdaemun/DongdaemunLoader';
import Dongdaemun from './dongdaemun/Dongdaemun';
import Dongjak from './dongjak/Dongjak';
import DongjakLoader from './dongjak/DongjakLoader';
import Eunpyeong from './eunpyeong/Eunpyeong';
import EunpyeongLoader from './eunpyeong/EunpyeongLoader';
import Gangbuk from './gangbuk/Gangbuk';
import GangbukLoader from './gangbuk/GangbukLoader';
import Gangdong from './gangdong/Gangdong';
import GangdongLoader from './gangdong/GangdongLoader';
import Gangnam from './gangnam/Gangnam';
import GangnamLoader from './gangnam/GangnamLoader';
import Gangseo from './gangseo/Gangseo';
import GangseoLoader from './gangseo/GangseoLoader';
import Geumcheon from './geumcheon/Geumcheon';
import GeumcheonLoader from './geumcheon/GeumcheonLoader';
import Guro from './guro/Guro';
import GuroLoader from './guro/GuroLoader';
import Gwanak from './gwanak/Gwanak';
import GwanakLoader from './gwanak/GwanakLoader';
import Gwangjin from './gwangjin/Gwangjin';
import GwangjinLoader from './gwangjin/GwangjinLoader';
import Jongno from './jongno/Jongno';
import JongnoLoader from './jongno/JongnoLoader';
import Jung from './jung/Jung';
import JungLoader from './jung/JungLoader';
import Jungnang from './jungnang/Jungnang';
import JungnangLoader from './jungnang/JungnangLoader';
import Mapo from './mapo/Mapo';
import MapoLoader from './mapo/MapoLoader';
import Nowon from './nowon/Nowon';
import NowonLoader from './nowon/NowonLoader';
import Seocho from './seocho/Seocho';
import SeochoLoader from './seocho/SeochoLoader';
import Seodaemun from './seodaemun/Seodaemun';
import SeodaemunLoader from './seodaemun/SeodaemunLoader';
import Seongbuk from './seongbuk/Seongbuk';
import SeongbukLoader from './seongbuk/SeongbukLoader';
import Seongdong from './seongdong/Seongdong';
import SeongdongLoader from './seongdong/SeongdongLoader';
import Songpa from './songpa/Songpa';
import SongpaLoader from './songpa/SongpaLoader';
import Yangcheon from './yangcheon/Yangcheon';
import YangcheonLoader from './yangcheon/YangcheonLoader';
import Yeongdeungpo from './yeongdeungpo/Yeongdeungpo';
import YeongdeungpoLoader from './yeongdeungpo/YeongdeungpoLoader';
import Yongsan from './yongsan/Yongsan';
import YongsanLoader from './yongsan/YongsanLoader';

export default function SeoulMap () {

    const [data, setData] = useState(null);

    useEffect(() => {
        if(sampleData){
            setData(sampleData.data);
        }
    },[data]);

    useEffect(() => {
        if(data){
            
            //<svg>영역 svg로 지정
            const svg = d3.select('svg')
            //svg 영역 안의 Group g지정 
            const g = svg.select('#Seoul');

            // key, value 배열화
            const district = Object.keys(data);
            const postCount = Object.values(data);

            //게시글 수에 따른 지역색 배정
            const maxCount = d3.max(postCount);
            const meanCount = d3.mean(postCount);
            const minCount = d3.min(postCount);

            const rankColor = d3.scaleLinear()
                .domain([minCount,meanCount,maxCount])
                .range(['green','greenyellow','yellow']);

            //게시글 수에 따른 시각화 색 설정
            district.forEach((d,i)=>{
                g.select(`#${d}`)
                    .attr('fill',rankColor(postCount[i]));
            })
        }
    })

    return (
        <div className='seoul-map'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="800" height="728" viewBox="0 0 800 656" stroke-linecap="round" stroke-linejoin="round">
                <g id="Seoul">
                    <Jongno />
                    <Jung />
                    <Yongsan />
                    <Seongdong />
                    <Gwangjin />
                    <Dongdaemun />
                    <Jungnang />
                    <Seongbuk />
                    <Gangbuk />
                    <Dobong />
                    <Nowon />
                    <Eunpyeong />
                    <Seodaemun />
                    <Mapo />
                    <Yangcheon />
                    <Gangseo />
                    <Guro />
                    <Geumcheon />
                    <Yeongdeungpo />
                    <Dongjak />
                    <Gwanak />
                    <Seocho />
                    <Gangnam />
                    <Songpa />
                    <Gangdong />
                </g>
            </svg>
            <DobongLoader />
            <DongdaemunLoader />
            <DongjakLoader />
            <EunpyeongLoader />
            <GangbukLoader />
            <GangdongLoader />
            <GangnamLoader />
            <GangseoLoader />
            <GeumcheonLoader />
            <GuroLoader />
            <GwanakLoader />
            <GwangjinLoader />
            <JongnoLoader />
            <JungLoader />
            <JungnangLoader />
            <MapoLoader />
            <NowonLoader />
            <SeochoLoader />
            <SeodaemunLoader />
            <SeongbukLoader />
            <SeongdongLoader />
            <SongpaLoader />
            <YangcheonLoader />
            <YeongdeungpoLoader/>
            <YongsanLoader />
        </div>
    );
};

