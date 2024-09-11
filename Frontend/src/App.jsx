import React from 'react';
import MainBody from './components/MainBody.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/header.css';
import '../public/styles/main-body.css';
import {DefaultPage} from './pages/DefaultPage.jsx';
import {AuditoryCalcPage} from './pages/AuditoryCalcPage.jsx';
import {AuditoryCollectPage} from './pages/AuditoryCollectPage.jsx';
import { buttonName } from '../data/button-naming.js';
import { AuditoryButton, ReportButton} from './components/Buttons.jsx';
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="top-header">
        <h3>Point Processor | Audience Uploader</h3>
      </div>
      <div className="down-header">
        <Link to="/">
          <h2 className="clickable-h2">
            Pointer Processor | Audience Uploader
          </h2>
        </Link>

        <AuditoryButton>{buttonName[0].name}</AuditoryButton>
        <ReportButton>{buttonName[1].name}</ReportButton>
      </div>
      <div className="main-body">
      <Routes>
        <Route path="/" element={<DefaultPage />}></Route>
        <Route path="/audcalc" element={<AuditoryCalcPage />}></Route>
        <Route path="/audcollect" element={<AuditoryCollectPage />}></Route>
      </Routes>
      </div>
      {/*<MainBody selectedOption={selectedOption} />*/}
    </>
  );
}

function App() {
  return <Header />;
}

export default App;
