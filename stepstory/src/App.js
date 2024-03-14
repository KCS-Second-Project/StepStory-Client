import './App.css';
import React from 'react';
import ViewPostLayout from './components/PageLayout/ViewPostLayout';
import profileImg from './assets/images/defaultprofile.png';
import StepmateList from './components/StepmateList/StepmatesList';
import StepmatesRequetList from './components/StepmateRequestList/StepmateRequestList';

function App() {
  return (
    <div className="App">
      <StepmatesRequetList />
    </div>
  );
}

export default App;
