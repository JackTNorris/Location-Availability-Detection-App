import {combineReducers} from 'redux';
import {RETRIEVED_LOCATIONS} from '../actions/types';

const INITIAL_STATE = {
  locations: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVED_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};
