import React from 'react';

export default function ImageSlider({ images }) {
  // 이미지 슬라이더 구현에 필요한 상태 및 로직 추가
  return (
    <div className="image-slider">
      {/* 이미지들을 순환하며 보여주는 UI 구현 */
        images.map((image, index) => (
            <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
                transform: `translateX(${-100 * index}%)`
            }}
            />
        ))
      }
    </div>
  );
}