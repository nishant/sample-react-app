import React from 'react';
import './App.scss';
import ProfileSelector from './components/custom/profile-selector';
import Sidenav from './components/custom/sidenav';
import ControlBar from './components/custom/control-bar';
import RequestsTable from './components/custom/requests-table';
import Map from './components/custom/map';
import OfferFilter from './components/custom/offer-filter';

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
        <RequestsTable />
        <OfferFilter />
      </div>
    </div>
  );
}

export default App;
