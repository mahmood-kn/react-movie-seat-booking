import React, { useContext } from 'react';
import SeatContext from '../contex/seatContext';

const SelectList = () => {
  const { movies } = useContext(SeatContext);
  console.log(movies);
  return (
    <div className='movie-container'>
      <label>Pick a movie: </label>
      <select>
        {movies.map((movie, i) => (
          <option value={movie.price}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
