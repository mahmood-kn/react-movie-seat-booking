import React, { useReducer } from 'react';

import SeatContext from './seatContext';
import seatReducer from './seatReducer';
import { ADD_SEAT, REMOVE_SEAT, UPDATE_MOVIE_PRICE } from './types';

const SeatState = ({ children }) => {
  const initialState = {
    movies: [
      { id: 1, name: 'Interstaller', price: 10 },
      { id: 2, name: 'Scare Face', price: 15 },
      { id: 3, name: 'Good Fellas', price: 8 },
      { id: 4, name: 'God Father', price: 20 },
    ],
    seatsNum: 0,
    total: 0,
    moviePrice: 0,
  };
  const [state, dispatch] = useReducer(seatReducer, initialState);

  const addSeat = () => {
    dispatch({ type: ADD_SEAT });
  };
  const removeSeat = () => {
    dispatch({ type: REMOVE_SEAT });
  };

  const updateMoviePrice = (price) => {
    dispatch({ type: UPDATE_MOVIE_PRICE, payload: price });
  };

  return (
    <SeatContext.Provider
      value={{
        movies: state.movies,
        seatsNum: state.seatsNum,
        total: state.total,
        moviePrice: state.moviePrice,
        addSeat,
        removeSeat,
        updateMoviePrice,
      }}>
      {children}
    </SeatContext.Provider>
  );
};

export default SeatState;
