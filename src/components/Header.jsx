import React from 'react';
import Button from 'react-bootstrap/Button';
import MainBody from './MainBody.jsx';
// import {EventClick} from './Events.jsx';

export function HeaderButton({children, onClick}) {
  console.log({children, onClick})
  return(
  <Button variant="outline-dark" onClick={onClick}>{children}</Button>
  )
}

export function Header() {
  const [selectedOption, setSelectedOption] = React.useState('default');

  const handleFirstClick = () => setSelectedOption('first');
  const handleSecondClick = () => setSelectedOption('second');
  const handleThirdClick = () => setSelectedOption('third');
  const handleFourthClick = () => setSelectedOption('fourth');

  return (
    <>
      <div className="top-header">
        <h3>Point Processor | Audience Uploader</h3>
      </div>
      {/*Pay attention!! Two different divs*/}
      <div className="down-header">
        <h2>Pointer Processor | Audience Uploader</h2>
        <HeaderButton onClick={handleFirstClick}>First Option</HeaderButton>
        <HeaderButton onClick={handleSecondClick}>Second Option</HeaderButton>
        <HeaderButton onClick={handleThirdClick}>Third Option</HeaderButton>
        <HeaderButton onClick={handleFourthClick}>Fourth Option</HeaderButton>
      </div>
      <MainBody selectedOption={selectedOption} />
    </>
  );
}