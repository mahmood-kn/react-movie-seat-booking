import React from 'react';
import Seat from './Seat';

const Help = () => {
  return (
    <ul className='showcase'>
      <li>
        <Seat />
        <small>N/A</small>
      </li>
      <li>
        <Seat selected />
        <small>Selected</small>
      </li>
      <li>
        <Seat occupeid />
        <small>Occupeid</small>
      </li>
    </ul>
  );
};

export default Help;
