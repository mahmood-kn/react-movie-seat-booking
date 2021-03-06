import React, { useContext } from 'react';
import SeatContext from '../contex/seatContext';

const Total = () => {
  const { seatsId, selectedMovie, movies } = useContext(SeatContext);
  let price;
  if (selectedMovie !== null) {
    price = +selectedMovie.price;
  } else {
    price = +movies[0].price;
  }
  return (
    <div className='info'>
      <p>
        You have selected <span>{seatsId ? seatsId.length : 0}</span> seats for
        a price of $<span>{(seatsId ? seatsId.length : 0) * price}</span>
      </p>
    </div>
  );
};

export default Total;
