import React, { useState, useEffect } from 'react';
import { blocks } from '../../data/data.js';

function MainBlock(props) {
  return (
    <div className="text-base">
      <h1>Основные функции веб интерфейса</h1>
      <p>
        {props.description}
        <ul>
          <li>{props.firstOption}</li>
          <li>{props.secondOption}</li>
          <li>{props.thirdOption}</li>
          <li>{props.fourthOption}</li>
        </ul>
      </p>
    </div>
  );
}

function TextBlock(props) {
  return (
    <div className="text-base">
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
    <div>
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
    <div>
      <TextBlock
      title={blocks[1].title}
      description={blocks[1].description}/>
    </div>
  );
}

function SecondOption() {
  return (
    <div>
      <h1>Second Option for the first button</h1>
    </div>
  );
}

function ThirdOption() {
  return (
    <div>
      <h1>Third Option for the first button</h1>
    </div>
  );
}

function FourthOption() {
  return (
    <div>
      <h1>Fourth Option for the first button</h1>
    </div>
  );
}