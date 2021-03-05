import {RETRIEVED_LOCATIONS} from './types';

const db = require('../loaders/firebaseDB');

export const getLocations = (organizationID) => {
  return (dispatch) => {
    db.ref(`/locations/${organizationID}`).on('value', (snapshot) => {
      dispatch({type: RETRIEVED_LOCATIONS, payload: snapshot.val()});
    });
  };
};
