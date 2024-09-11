import React, { useState, useEffect } from 'react';
import FileUploader from './FileUploader.jsx';
import { buttonName } from '../../data/button-naming.js';


export function MainBlock(props) {
  return (
    <div>
      <h1>Основные функции веб интерфейса</h1>
      <p>
        {'Данный интерфейс поддерживает несколько функций расчета: '}
      </p>
        <ul>
          <li>{buttonName[0].name + ": " + buttonName[0].description}</li>
          <li>{buttonName[1].name + buttonName[1].description}</li>
        </ul>
    </div>
  );
}

export function TextBlock(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
    </div>
  );
}

export default function MainBody({ selectedOption }) {
  const [currentOption, setCurrentOption] = useState('default');
  const [animation, setAnimation] = useState('');

  return (<div className={'main-body'}></div>);
}

// Define all components outside MainBody (best practice)


function FirstReportOption() {
  return (
    <div className="base">
      <h1>First Option for the first button</h1>
    </div>
  );
}

function SecondReportOption() {
  return (
    <div className="base">
      <h1>Second Option for the first button</h1>
    </div>
  );
}

function ThirdAuditoryOption() {
  return (
    <div className="base">
      <h1>Third Option for the first button</h1>
    </div>
  );
}

function ThirdReportOption() {
  return (
    <div className="base">
      <h1>Third Option for the first button</h1>
    </div>
  );
}

function FourthAuditoryOption() {
  return (
    <div className="base">
      <h1>Fourth Option for the first button</h1>
    </div>
  );
}

function FourthReportOption() {
  return (
    <div className="base">
      <h1>Fourth Option for the first button</h1>
    </div>
  );
}