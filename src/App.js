import React from 'react';
import SelectList from './components/SelectList';
import Help from './components/Help';
import Screen from './components/Screen';

function App() {
  return (
    <>
      <SelectList />
      <Help />
      <div className='container'>
        <Screen />
      </div>
    </>
  );
}

export default App;
