import {RETRIEVED_LOCATIONS} from './types';

const db = require('../loaders/firebaseDB');

export const getLocations = (organizationID) => {
  return (dispatch) => {
    db.ref(`/locations/${organizationID}`).on('value', (snapshot) => {
      const arrData = [];
      snapshot.forEach((item) => {
        arrData.push(item.val());
      });
      console.log(arrData);
      dispatch({type: RETRIEVED_LOCATIONS, payload: arrData});
    });
  };
};
