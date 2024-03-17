import './App.css';
import React from 'react';
import logo from './image/logo.svg';
import profileImg from './assets/images/defaultprofile.png';
import StepmatesBanner from './components/RightSideBar/StepmatesBanner/StepmatesBanner';
import RightSideBar from './components/RightSideBar/RightSideBar';



function App() {
  return (
      <div className="App">
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" /> 로고 돌아가는 애니메이션*/}
        {/*  <p>*/}
        {/*    StepStory Main Screen*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://github.com/orgs/KCS-Second-Project/repositories"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Go Github Link*/}
        {/*  </a>*/}
        {/*</header>*/}
        <header className="App-test">
          <img src={logo} alt="logo" style={{width: '15%'}}/>
          {/*<h1 style={{color: 'blue'}}>content</h1>*/}
        </header>
      </div>
  );
}

export default App;
