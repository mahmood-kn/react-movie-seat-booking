import React, { useReducer } from 'react';

import SeatContext from './seatContext';
import seatReducer from './seatReducer';

const SeatState = ({ children }) => {
  const initialState = {
    movies: [
      { name: 'Interstaller', price: 10 },
      { name: 'Scare Face', price: 15 },
      { name: 'Good Fellas', price: 8 },
      { name: 'God Father', price: 20 },
    ],
    seats: 0,
    total: 0,
  };
  const [state, dispatch] = useReducer(seatReducer);

  return <SeatContext.Provider>{children}</SeatContext.Provider>;
};

export default SeatState;
