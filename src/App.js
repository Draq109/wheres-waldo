import React, { useEffect, useState } from 'react';
import './App.css';
import marvelPic from './images/marvel.webp';
import Stopwatch from './components/Stopwatch';
import DropdownMenu from './components/DropdownMenu';
import SelectionBox from './components/SelectionBox';

function App() {
  const [pause, setPause] = useState(true);
  const [reset, setReset] = useState(false);
  const [active, setActive] = useState(true);

  function pauseTime() {
    pause === true ? setPause(false) : setPause(true);
  }
  function toggleActive() {
    active === true ? setActive(false) : setActive(true);
  }

  return (
    <>
      <SelectionBox toggleActive={toggleActive} pauseTime={pauseTime} active={active}></SelectionBox>
      <div className={active ? "app-active" : "app"}>
        <header className="app-header">
          <span className='title'>Find them</span>
          <Stopwatch pause={pause} setPause={setPause} reset={reset} setReset={setReset}></Stopwatch>
          <DropdownMenu></DropdownMenu>
        </header>
        <img src={marvelPic} className='marvel-image'></img>
      </div>
    </>
  );
}

export default App;
