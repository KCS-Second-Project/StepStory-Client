import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 전역 스타일을 적용하려면 여기에 CSS 파일을 import 합니다.
import App from './App';
// 필요하다면 서비스 워커나 다른 설정들을 여기에 추가할 수 있습니다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);