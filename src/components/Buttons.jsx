import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';


export function AuditoryButton({ children, handlers }) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          {children || "Dropdown button"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handlers.handleFirstClick}>Расчет аудиторий</Dropdown.Item>
          <Dropdown.Item onClick={handlers.handleSecondClick}>Сбор аудиторий</Dropdown.Item>
          <Dropdown.Item onClick={handlers.handleThirdClick}>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handlers.handleFourthClick}>Separated link</Dropdown.Item>
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

export function ReportButton({ children, handlers }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {children || "Dropdown button"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handlers.handleFirstClick}>TrackDero1</Dropdown.Item>
        <Dropdown.Item onClick={handlers.handleSecondClick}>TrackDero1</Dropdown.Item>
        <Dropdown.Item onClick={handlers.handleThirdClick}>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handlers.handleFourthClick}>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function ReportHandlers(setSelectedOption) {
  return {
    handleFirstClick: () => setSelectedOption('firstReport'),
    handleSecondClick: () => setSelectedOption('secondReport'),
    handleThirdClick: () => setSelectedOption('thirdReport'),
    handleFourthClick: () => setSelectedOption('fourthReport'),
  };
}
