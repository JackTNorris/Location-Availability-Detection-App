import {LOGGED_IN, LOGGED_IN_ERROR} from '../actions/types';

const INITIAL_STATE = {
  organizationID: '',
  errorMessage: '',
  loggedIn: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        organizationID: action.payload,
        loggedIn: true,
      };
    case LOGGED_IN_ERROR:
      return {
        ...state,
        errorMessage: 'That organization does not exist',
        loggedIn: false,
      };
    default:
      return state;
  }
};
