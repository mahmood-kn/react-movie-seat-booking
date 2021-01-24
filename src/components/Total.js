import React, { useContext } from 'react';
import SeatContext from '../contex/seatContext';

const Total = () => {
  const { seatsNum } = useContext(SeatContext);
  return (
    <div className='info'>
      <p>
        You have selected <span>{seatsNum}</span> seats for a price of $
        <span>0</span>
      </p>
    </div>
  );
};

export default Total;
