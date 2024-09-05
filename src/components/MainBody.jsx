import React, { useState, useEffect } from 'react';
import FileUploader from './FileUploader.jsx';
import { TextField } from './TextField.jsx';
import { buttonName } from '../../data/button-naming.js';


function MainBlock(props) {
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

function TextBlock(props) {
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

  useEffect(() => {
    if (currentOption !== selectedOption) {
      // Trigger fade-out animation
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentOption(selectedOption);
        setAnimation('fade-in');
      }, 500); // Duration of fade-out before switching content
    }
  }, [selectedOption]);

  const renderOption = () => {
    switch (currentOption) {
      case 'firstAuditory':
        return <FirstAuditoryOption />;
      case 'secondAuditory':
        return <SecondAuditoryOption />;
      case 'thirdAuditory':
        return <ThirdAuditoryOption />;
      case 'fourthAuditory':
        return <FourthAuditoryOption />;
      case 'firstReport':
        return <FirstReportOption />;
      case 'secondReport':
        return <SecondReportOption />;
      case 'thirdReport':
        return <ThirdReportOption />;
      case 'fourthReport':
        return <FourthReportOption />;
      default:
        return <DefaultBody />;
    }
  };

  return <div className={`main-body ${animation}`}>{renderOption()}</div>;
}

// Define all components outside MainBody (best practice)
function DefaultBody() {
  return (
    <div className="base">
      <MainBlock />
    </div>
  );
}

function FirstAuditoryOption() {
  return (
    <div className="base">
      <TextBlock title={"Расчет аудиторий"}
                 description={"Для расчета необходимо заполнить следующие поля:"} />
      <ul>
        <li>Прикрепить файл с координатами для сбора аудиторий</li>
        <li>Указать радиус в метрах</li>
        <li>Указать дату старта сбора</li>
        <li>Указать дату конца сбора</li>
      </ul>
      <div>
        <FileUploader />
        <p>Поле</p>
        <TextField />
      </div>
    </div>
  );
}

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

function SecondAuditoryOption() {
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