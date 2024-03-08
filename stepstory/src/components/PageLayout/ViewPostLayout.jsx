import React from 'react';
import Header from '../Header/Header';
import PostCard from '../PostCard/PostCard';
// import Map from '../Map/Map';
// import TravelPeriod from '../TravelPeriod/TravelPeriod';
import PostComments from '../PostComments/PostComments';
import DefaultProfile from '../../assets/images/defaultprofile.png';
import './style.css';


const headerLocation = "서울시 가산디지털단지"

const imagesExample = [
  {
      src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/news_images/11dc170f352750ca9123834677d4065f',
      alt: '더미1',
  },
  {
      src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/news_images/081f5e9d316ab2b5661b497de3d3fe40',
      alt: '더미2',
  },
  {
      src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/user_2/IMG_9423.jpeg',
      alt: '나2',
  },
  {
      src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/news_images/02345666935ca959a308624762d8309e',
      alt: '더미3',
  },
  {
      src: 'https://inglo-bucket.s3.ap-northeast-2.amazonaws.com/news_images/02534ed8e374d687ac448755b738c776',
      alt: '더미4',
  },
]

const titleExample = "가산 디지털 단지로의 여행"
const contentExample = "매일 가산으로 출근하는 나에게 가산 디지털 단지는 익숙한 곳이다. 하지만, 가산 디지털 단지에 대한 여행은 처음이었다. 가산 디지털 단지에는 많은 회사들이 있고, 그 회사들은 다양한 사람들로 가득 차 있다. 그들은 각자의 일을 하고, 각자의 삶을 살고 있다. 그들의 삶을 엿볼 수 있는 여행을 떠나보자."

const comments = [
  {
    user: "양혜인",
    date: "2024.03-09",
    content: "여행할게 아니라 출석을 하라고"
  },
  {
    user: "맹인호",
    date: "2024.03-09",
    content: "동겸아 출석좀 잘해라"
  },
  {
    user: "임창희",
    date: "2024.03-09",
    content: "프론트 파이팅"
  },
  {
    user: "이인홍",
    date: "2024.03-09",
    content: "백엔드도 파이팅"
  }
];

export default function ViewPostLayout() {
  return (
    <div className="post-container">
        <Header location={ headerLocation } />
        <div className="post-layout">
            <div className="left-section">
                <PostCard images={imagesExample} profileImage={DefaultProfile} user="장동겸" date="2024.03.08" title={titleExample} content={contentExample}/>
            </div>
            <div className="right-section">
                <PostComments comments ={ comments } />
            </div>
        </div>
    </div>
  );
}