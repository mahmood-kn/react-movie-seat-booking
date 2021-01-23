import React from 'react';

const SelectList = () => {
  return (
    <div className='movie-container'>
      <label>Pick a movie: </label>
      <select>
        <option value='10'>Interstaller ($10)</option>
        <option value='15'>Scare Face ($15)</option>
        <option value='8'>Good Fellas ($8)</option>
        <option value='20'>God Father ($20)</option>
      </select>
    </div>
  );
};

export default SelectList;
