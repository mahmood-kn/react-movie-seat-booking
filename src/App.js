import React from 'react';
import SelectList from './components/SelectList';
import Help from './components/Help';
import Screen from './components/Screen';
import Seats from './components/Seats';
import Total from './components/Total';

function App() {
  return (
    <>
      <SelectList />
      <Help />
      <div className='container'>
        <Screen />
        <Seats />
      </div>
      <Total />
    </>
  );
}

export default App;
