import { ADD_SEAT, REMOVE_SEAT, UPDATE_MOVIE_PRICE } from './types';

const seatReducer = (state, action) => {
  switch (action.type) {
    case ADD_SEAT:
      return {
        ...state,
        seatsNum: state.seatsNum + 1,
      };
    case REMOVE_SEAT:
      return {
        ...state,
        seatsNum: state.seatsNum - 1,
      };
    case UPDATE_MOVIE_PRICE:
      return {
        ...state,
        moviePrice: action.payload,
      };
    default:
      return state;
  }
};

export default seatReducer;
