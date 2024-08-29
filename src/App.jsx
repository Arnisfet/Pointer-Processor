import React from 'react';
import MainBody from './components/MainBody.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap globally
import '../public/styles/header.css'
import '../public/styles/main-body.css'
import Button from 'react-bootstrap/Button';

function HeaderButton({children, onClick}) {
  console.log({children, onClick})
  return(
    <Button variant="outline-dark" onClick={onClick}>{children}</Button>
  )
}

function App() {
  function Header() {
    const [selectedOption, setSelectedOption] = React.useState('default');

    const handleH2Click = () => setSelectedOption('default');
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
          <h2 onClick={handleH2Click} className={"clickable-h2"}>Pointer Processor | Audience Uploader</h2>
          <HeaderButton onClick={handleFirstClick}>First Option</HeaderButton>
          <HeaderButton onClick={handleSecondClick}>Second Option</HeaderButton>
          <HeaderButton onClick={handleThirdClick}>Third Option</HeaderButton>
          <HeaderButton onClick={handleFourthClick}>Fourth Option</HeaderButton>
        </div>
        <MainBody selectedOption={selectedOption} />
      </>
    );
  }

  return (
    <>
      <Header />
    </>
  );
}

export default App;