import React from 'react';
import './style.css';

export default function TravelPeriod() {
  // 날짜를 선택하는 UI 구현
  return (
    <div className="container">
      <h3 className="period">TravelPeriod</h3>
      <div className="travel-period-container">
        <div className="travel-period-placeholder">
          {/* 캘린더가 들어갈 자리 */}
        </div>
      </div>
    </div>
  );
}