import React from 'react';
import Header from '../Header/Header';
import PostCard from '../PostCard/PostCard';
import Map from '../Map/Map';
import TravelPeriod from '../TravelPeriod/TravelPeriod';
import './style.css';


export default function ViewPostLayout() {
  return (
    <div className="post-container">
        <Header location="경기도 오산시 " />
        <div className="post-layout">
            <div className="left-section">
                <PostCard />
            </div>
            <div className="right-section">
                <Map />
                <TravelPeriod />
            </div>
        </div>
    </div>
  );
}