import React, { useContext } from 'react';
import SeatContext from '../contex/seatContext';

const Total = () => {
  const { seatsNum, moviePrice } = useContext(SeatContext);
  return (
    <div className='info'>
      <p>
        You have selected <span>{seatsNum}</span> seats for a price of $
        <span>{seatsNum * moviePrice}</span>
      </p>
    </div>
  );
};

export default Total;
