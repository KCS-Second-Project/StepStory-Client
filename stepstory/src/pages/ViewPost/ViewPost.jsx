import React, { useState } from "react";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import Map from "../../components/Map/Map";
import TravelPeriod from "../../components/TravelPeriod/TravelPeriod";
import PostComments from "../../components/PostComments/PostComments";
import DefaultProfile from "../../assets/images/defaultprofile.png";
import "./style.css";

const locationsGps = [
  { lat: 37.5642135, lng: 127.0016985 },
  { lat: 37.5658859, lng: 126.9754788 },
  { lat: 37.5507096, lng: 126.9408428 }
];

const headerLocation = "서울특별시 가산디지털단지"

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

const startDate = "2024-03-02";
const endDate = "2024-03-07";

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

const user = "장동겸"
const date = "2024.03.08"

export default function ViewPost() {
  const [showComments, setShowComments] = useState(false);

  const handleCommentButtonClick = () => {
    setShowComments(prevShowComments => !prevShowComments);
  };

  return (
    <div className="post-container-view-post">
        <Header locationName={ headerLocation } />
        <div className="post-layout-view-post">
            <div className="left-panel-view-post">
                <PostCard images={imagesExample} profileImage={DefaultProfile} user={ user } date={ date } title={titleExample} content={contentExample} onCommentClick={handleCommentButtonClick}/>
            </div>
            <div className="right-panel-view-post">
                {showComments ? <PostComments comments={comments} /> : <><Map locationsGps={locationsGps} /><TravelPeriod startDate={startDate} endDate={endDate}/></>}
            </div>
        </div>
    </div>
  );
}