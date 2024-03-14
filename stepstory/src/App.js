import './App.css';
import React from 'react';
import ViewPostLayout from './components/PageLayout/ViewPostLayout';
import profileImg from './assets/images/defaultprofile.png';
import BestPost from './components/RightSideBar/BestPost/BestPost';
import StepmateRequestList from './components/RightSideBar/StepmateRequestList/StepmateRequestList';



function App() {
  return (
    <div className="App">
      <StepmateRequestList />
    </div>
  );
}

export default App;
