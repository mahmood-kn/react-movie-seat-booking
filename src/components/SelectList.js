import React, { useContext, useEffect } from 'react';
import SeatContext from '../contex/seatContext';

const SelectList = () => {
  const { moviePrice, movies, updateMoviePrice } = useContext(SeatContext);
  useEffect(() => {
    updateMoviePrice(movies[0].price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    updateMoviePrice(+e.target.value);
  };
  return (
    <div className='movie-container'>
      <label>Pick a movie: </label>
      <select value={moviePrice} onChange={handleChange}>
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
