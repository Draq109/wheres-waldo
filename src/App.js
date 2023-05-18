import React, { useEffect, useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import DropdownMenu from './components/DropdownMenu';
import SelectionBox from './components/SelectionBox';
import ContextMenu from './components/ContextMenu';
import GameImage from './components/GameImage';


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
      <ContextMenu></ContextMenu>
      <div className={active ? "app-active" : "app"}>
        <header className="app-header">
          <span className='title'>Find them</span>
          <Stopwatch pause={pause} setPause={setPause} reset={reset} setReset={setReset}></Stopwatch>
          <DropdownMenu></DropdownMenu>
        </header>
          <GameImage></GameImage>
      </div>
    </>
  );
}

export default App;
