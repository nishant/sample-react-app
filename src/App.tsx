import React from 'react';
import './App.scss';
import ProfileSelector from './components/custom/profile-selector';
import Sidenav from './components/custom/sidenav';
import ControlBar from './components/custom/control-bar';
import PendingRequests from './components/custom/pending-requests';
import Map from './components/custom/map';
import OfferFilter from './components/custom/offer-filter';
import OfferHistory from './components/custom/offer-history';

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
        <PendingRequests />
        <OfferFilter />
        <OfferHistory />
      </div>
    </div>
  );
}

export default App;
