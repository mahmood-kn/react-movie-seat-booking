import { ADD_SEAT, REMOVE_SEAT } from './types';

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
    default:
      return state;
  }
};

export default seatReducer;
