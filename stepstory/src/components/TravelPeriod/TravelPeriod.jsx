import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

export default function TravelPeriod({ startDate, endDate }) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (date.toDateString() === start.toDateString() || date.toDateString() === end.toDateString()) {
        return 'highlight-start-end';
      }
      else if (date > start && date < end) {
        return 'highlight';
      }
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
