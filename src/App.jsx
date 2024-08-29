import React from 'react';
import {Header} from './components/Header.jsx';
import MainBody from './components/MainBody.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap globally
import '../public/styles/header.css'
import '../public/styles/main-body.css'
import { useState } from 'react';



function App() {
  return (
    <>
      <Header />
      {/*<MainBody />*/}
    </>
  );
}

export default App;