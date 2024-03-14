import './App.css';
import React from 'react';
import ViewPostLayout from './components/PageLayout/ViewPostLayout';
import profileImg from './assets/images/defaultprofile.png';
import BestPost from './components/BestPost/BestPost';



function App() {
  return (
    <div className="App">
      <BestPost 
                profile={profileImg} 
                username={'Username'} 
                title={'test'} 
                wantToGoCount={999} 
                date={'2024-03-01 ~ 20240-03-11'} 
                place={'가산디지털단지'}
            />
    </div>
  );
}

export default App;
