import React from 'react';
import SelectList from './components/SelectList';
import Help from './components/Help';
import Screen from './components/Screen';
import Seats from './components/Seats';

function App() {
  return (
    <>
      <SelectList />
      <Help />
      <div className='container'>
        <Screen />
        <Seats />
      </div>
    </>
  );
}

export default App;
