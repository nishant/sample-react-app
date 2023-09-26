import React from 'react';
import './App.scss';
import ProfileSelector from './components/profile-selector/profile-selector';
import Sidenav from './components/sidenav/sidenav';

function App() {
  return (
    <div id="page-container">
      <div className="sidenav-container content">
        <ProfileSelector />
        <Sidenav />
      </div>
      <div className="content-container content">
        world
      </div>
    </div>
  );
}

export default App;
