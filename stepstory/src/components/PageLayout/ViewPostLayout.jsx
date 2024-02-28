import React from 'react';
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';
import ImageSlider from '../ImageSlider/ImageSlider'
import Map from '../Map/Map';
import TravelPeriod from '../TravelPeriod/TravelPeriod';

export default function ViewPostLayout() {
  return (
    <div className="step-story-component">
      <Header location="경기도 오산시 " />
      <UserProfile user="장동겸" date="2024.02.27" />
      <ImageSlider images={[/* 이미지 데이터 배열 */]} />
      <Map />
      <TravelPeriod startDate={
        '2021-10-01'
      } endDate={'2024-02-29'} />
      {/* 나머지 UI 부분 구현 */}
    </div>
  );
}