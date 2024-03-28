import React from "react";
import "./style.css";
import PostStep3Main from "../../components/PostStep3Main/PostStep3Main.jsx";
import Header from "../../components/Header/Header.jsx";

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


export default function PostStep3() {
    return (
        <div className="post-step3-page-container">
            <Header locationName="새 게시물 만들기"/>
            <PostStep3Main images={imagesExample} title={null} content={null} />
        </div>
    );
}

