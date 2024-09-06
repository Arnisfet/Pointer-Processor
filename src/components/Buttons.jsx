import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';

export function AuditoryButton({ children, handlers }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {children || 'Dropdown button'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to="/audcalc">
          <Dropdown.Item as="span">Расчет аудиторий</Dropdown.Item>
        </Link>

        <Link to="/audcollect">
        <Dropdown.Item as="span">Сбор аудиторий</Dropdown.Item>
        </Link>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
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
