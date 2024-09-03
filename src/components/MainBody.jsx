import React, { useState, useEffect } from 'react';
import { blocks } from '../../data/data.js';
import FileUploader from './FileUploader.jsx';
import { TextField } from './TextField.jsx';

function MainBlock(props) {
  return (
    <div>
      <h1>Основные функции веб интерфейса</h1>
      <p>
        {props.description}
      </p>
        <ul>
          <li>{props.firstOption}</li>
          <li>{props.secondOption}</li>
          <li>{props.thirdOption}</li>
          <li>{props.fourthOption}</li>
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
      case 'first':
        return <FirstOption />;
      case 'second':
        return <SecondOption />;
      case 'third':
        return <ThirdOption />;
      case 'fourth':
        return <FourthOption />;
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
      <MainBlock
        title={blocks[0].title}
        description={blocks[0].description}
        firstOption={blocks[0].firstOption}
        secondOption={blocks[0].secondOption}
        thirdOption={blocks[0].thirdOption}
        fourthOption={blocks[0].fourthOption}/>
    </div>
  );
}

function FirstOption() {
  return (
    <div className="base">
      <TextBlock title={blocks[1].title} description={blocks[1].description} />
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

function SecondOption() {
  return (
    <div className="base">
      <h1>Second Option for the first button</h1>
    </div>
  );
}

function ThirdOption() {
  return (
    <div className="base">
      <h1>Third Option for the first button</h1>
    </div>
  );
}

function FourthOption() {
  return (
    <div className="base">
      <h1>Fourth Option for the first button</h1>
    </div>
  );
}