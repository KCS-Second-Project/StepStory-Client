import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

export default function TravelPeriod({ startDate, endDate }) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  const tileClassName = ({ date, view }) => {
    // 달력의 'month' 뷰에서만 스타일을 적용합니다.
    if (view === 'month') {
      // date가 시작 날짜나 종료 날짜와 같은 경우 'highlight-start-end' 클래스를 적용합니다.
      if (date.toDateString() === start.toDateString() || date.toDateString() === end.toDateString()) {
        return 'highlight-start-end';
      }
      // date가 시작 날짜와 종료 날짜 사이에 있는 경우 'highlight' 클래스를 적용합니다.
      else if (date > start && date < end) {
        return 'highlight';
      }
      // date가 오늘 날짜와 같고, 종료 날짜가 아닌 경우 'today' 클래스를 적용합니다.
      else if (date.toDateString() === today.toDateString() && date.toDateString() !== end.toDateString()) {
        return 'today';
      }
    }
  };

  return (
    <div className="container">
      <h3 className="period">Travel Period</h3>
      <div className="travel-period-container">
        <Calendar
          value={endDate ? [start, end] : start}
          tileClassName={tileClassName}
          showNeighboringMonth={false}
          className={"custom-calendar"}
          onClickDay={(value) => {}}
          activeStartDate={start}
        />
      </div>
    </div>
  );
}
