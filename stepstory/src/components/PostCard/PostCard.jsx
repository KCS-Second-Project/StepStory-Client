import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import ImageSlider from '../ImageSlider/ImageSlider';
import PostContent from '../PostContent/PostContent';


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

const titleExample = "가산 디지털 단지로의 여행"
const contentExample = "매일 가산으로 출근하는 나에게 가산 디지털 단지는 익숙한 곳이다. 하지만, 가산 디지털 단지에 대한 여행은 처음이었다. 가산 디지털 단지에는 많은 회사들이 있고, 그 회사들은 다양한 사람들로 가득 차 있다. 그들은 각자의 일을 하고, 각자의 삶을 살고 있다. 그들의 삶을 엿볼 수 있는 여행을 떠나보자."

export default function PostCard() {
  return (
    <div>
      <UserProfile user="장동겸" date="2024.02.27" />
      <ImageSlider images={imagesExample} />
      <PostContent title={titleExample} content={contentExample} />
    </div>
  );
}