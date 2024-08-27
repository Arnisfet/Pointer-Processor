import React from 'react';
import Button from 'react-bootstrap/Button';

export function Header() {
  return (
    <>
      <div className="top-header">
        <h3>Point Processor | Audience Uploader</h3>
      </div>
      {/*Pay attention!! Two different divs*/}
      <div className="down-header">
        <h2>Pointer Processor | Audience Uploader</h2>
        <Button variant="outline-dark">First Option</Button>
        <Button variant="outline-dark">Second Option</Button>
        <Button variant="outline-dark">Third Option</Button>
        <Button variant="outline-dark">Fourth Option</Button>
      </div>
    </>
  );
}