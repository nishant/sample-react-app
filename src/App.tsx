import React from 'react';
import './App.scss';
import ProfileSelector from './components/profile-selector/profile-selector';
import Sidenav from './components/sidenav/sidenav';
import ControlBar from './components/control-bar/control-bar';
import Map from './components/map/map';

function App() {
  return (
    <div id="page-container">
      <div className="sidenav-container content">
        <ProfileSelector />
        <Sidenav />
      </div>
      <div className="content-container content">
        <ControlBar />
        <Map />
      </div>
    </div>
  );
}

export default App;
