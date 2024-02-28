import './App.css';
import React from 'react';
import StepStoryComponent from './components/PageLayout/ViewPostLayout';
// 다른 필요한 스타일 시트나 자산들을 여기에 import 할 수 있습니다.

function App() {
  return (
    <div className="App">
      <StepStoryComponent />
      {/* 필요하다면 다른 컴포넌트들도 여기에 추가할 수 있습니다. */}
    </div>
  );
}

export default App;
