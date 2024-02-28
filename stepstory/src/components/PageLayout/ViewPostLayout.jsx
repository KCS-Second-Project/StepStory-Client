import React from 'react';
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';
import ImageSlider from '../ImageSlider/ImageSlider'
import Map from '../Map/Map';
import TravelPeriod from '../TravelPeriod/TravelPeriod';


const imagesExample = [
    {
        src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/goormthon_univ_background.png',
        alt: '구름톤 배경화면',
    },
    {
        src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/IMG_9447.jpeg',
        alt: '나1',
    },
    {
        src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/IMG_9423.jpeg',
        alt: '나2',
    },
    {
        src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/IMG_8165.png',
        alt: '나3',
    },
    {
        src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/IMG_8162.png',
        alt: '나4',
    },
]

export default function ViewPostLayout() {
  return (
    <div className="step-story-component">
      <Header location="경기도 오산시 " />
      <UserProfile user="장동겸" date="2024.02.27" />
      <ImageSlider images={imagesExample} />
      <Map />
      <TravelPeriod startDate={
        '2021-10-01'
      } endDate={'2024-02-29'} />
      {/* 나머지 UI 부분 구현 */}
    </div>
  );
}