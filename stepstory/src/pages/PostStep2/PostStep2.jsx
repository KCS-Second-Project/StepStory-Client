import React from "react";
import PostStep2Main from "../../components/PostStep2Main/PostStep2Main";
import Header from "../../components/Header/Header";
import './style.css';

const headerExample = "새 게시물 만들기";

const locationsGps = [
    { lat: 37.5642135, lng: 127.0016985 },
    { lat: 37.5658859, lng: 126.9754788 },
    { lat: 37.5507096, lng: 126.9408428 }
  ];

const imagesExample = [
    {
        src: 'https://stepstory.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2024-03-09-03-00-37.jpeg',
        alt: '가산디지털단지 8번출구',
    },
    {
      src: 'https://stepstory.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2024-03-09-03-00-35.jpeg',
      alt: '가산 디지털 단지 가는 지하철',
    },
    {
        src: 'https://stepstory.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2024-03-09-03-00-31.jpeg',
        alt: '카카오 클라우드 스쿨 3 강의실',
    },
    {
        src: 'https://stepstory.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2024-03-09-03-00-33.jpeg',
        alt: '카카오 클라우드 스쿨 3 강의실 뒷자리',
    },
    {
        src: 'https://stepstory.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Image_2024-03-09-03-00-28.jpeg',
        alt: '카카오 클라우드 스쿨 3 강의실 오른쪽 자리',
    },
  ];

export default function PostStep2(){
    return (
        <div className="post-step2-page-container"> 
            <Header locationName={headerExample}/>
            <PostStep2Main images={imagesExample} locationsGps={locationsGps} />
        </div>
    );
}