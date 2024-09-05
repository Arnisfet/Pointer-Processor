import React from 'react';
import MainBody from './components/MainBody.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/header.css';
import '../public/styles/main-body.css';
import { buttonName } from '../data/button-naming.js';
import { AuditoryButton, AuditoryHandlers, ReportButton, ReportHandlers } from './components/Buttons.jsx';

function Header() {
  const [selectedOption, setSelectedOption] = React.useState('default');
  const handleH2Click = () => setSelectedOption('default');

  // Generate handlers using AuditoryHandlers
  const auditoryHandlers = AuditoryHandlers(setSelectedOption);
  const reportHandlers = ReportHandlers(setSelectedOption);


  return (
    <>
      <div className="top-header">
        <h3>Point Processor | Audience Uploader</h3>
      </div>
      <div className="down-header">
        <h2 onClick={handleH2Click} className="clickable-h2">
          Pointer Processor | Audience Uploader
        </h2>
        <AuditoryButton handlers={auditoryHandlers}>{buttonName[0].name}</AuditoryButton>
        <ReportButton handlers={reportHandlers}>{buttonName[1].name}</ReportButton>
        {/*<AuditoryButton handlers={handlers}>{buttonName[2].name}</AuditoryButton>*/}
        {/*<AuditoryButton handlers={handlers}>{buttonName[3].name}</AuditoryButton>*/}
      </div>
      <MainBody selectedOption={selectedOption} />
    </>
  );
}

function App() {
  return <Header />;
}

export default App;
