import React from 'react';

const Help = () => {
  return (
    <ul className='showcase'>
      <li>
        <div className='seat'></div>
        <small>N/A</small>
      </li>
      <li>
        <div className='seat selected'></div>
        <small>Selected</small>
      </li>
      <li>
        <div className='seat occupeid'></div>
        <small>Occupeid</small>
      </li>
    </ul>
  );
};

export default Help;
