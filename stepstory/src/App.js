import './App.css';
import React from 'react';
import profileImg from './assets/images/defaultprofile.png';
import StepmatesBanner from './components/RightSideBar/StepmatesBanner/StepmatesBanner';
import RightSideBar from './components/RightSideBar/RightSideBar';



function App() {
  return (
    <div className="App">
      <RightSideBar />
    </div>
  );
}

export default App;
