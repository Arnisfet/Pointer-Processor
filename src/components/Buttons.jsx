import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import {audienceOptions} from '/data/audience-options.js'
import { Link } from 'react-router-dom';

export function AuditoryButton({ children, handlers }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {children || 'Dropdown button'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/audcalc">
          <Dropdown.Item as="span">{audienceOptions[0].firstOption}</Dropdown.Item>
        </Link>

        <Link to="/audcollect">
        <Dropdown.Item as="span">{audienceOptions[0].secondOption}</Dropdown.Item>
        </Link>
        <Dropdown.Item>{audienceOptions[0].thirdOption}</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>{audienceOptions[0].fourthOption}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


export function AuditoryHandlers(setSelectedOption) {
  return {
    handleFirstClick: () => setSelectedOption('firstAuditory'),
    handleSecondClick: () => setSelectedOption('secondAuditory'),
    handleThirdClick: () => setSelectedOption('thirdAuditory'),
    handleFourthClick: () => setSelectedOption('fourthAuditory'),
  };
}

export function ReportButton({ children }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {children || "Dropdown button"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >TrackDero1</Dropdown.Item>
        <Dropdown.Item >TrackDero1</Dropdown.Item>
        <Dropdown.Item >Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item >Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
