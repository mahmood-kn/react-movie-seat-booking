import React, { useContext } from 'react';
import SeatContext from '../contex/seatContext';

const SelectList = () => {
  const { movies } = useContext(SeatContext);
  return (
    <div className='movie-container'>
      <label>Pick a movie: </label>
      <select>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.price} data-movieid={movie.id}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
