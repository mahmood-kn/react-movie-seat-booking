import React from 'react';
import Seat from './Seat';

const Seats = () => {
  const seats = [];
  const row = 6;
  const column = 8;
  for (let i = 0; i < row; i++) {
    seats[i] = [];
    for (let j = 0; j < column; j++) {
      seats[i][j] = <Seat id={i * column + j + 1} key={i * column + j + 1} />;
    }
  }
  return (
    <>
      {seats.map((row, i) => (
        <div className='row' key={i}>
          {row.map((column, j) => column)}
        </div>
      ))}
    </>
  );
};

export default Seats;
