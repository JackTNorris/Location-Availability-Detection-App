import {LOGGED_IN, LOGGED_IN_ERROR} from './types';
import AsyncStorage from '@react-native-community/async-storage';
const db = require('../loaders/firebaseDB');

export const login = (organizationID) => {
  return async (dispatch) => {
    const ref = await db.ref('/locations').once('value');
    if (ref.hasChild(organizationID)) {
      try {
        await AsyncStorage.setItem('ORGANIZATIONID', organizationID);
        dispatch({type: LOGGED_IN, payload: organizationID});
      } catch (error) {
        dispatch({type: LOGGED_IN_ERROR});
      }
    } else {
      dispatch({type: LOGGED_IN_ERROR});
    }
  };
};

export const checkLoginPersistence = () => {
  return async (dispatch) => {
    try {
      const ref = await db.ref('/locations').once('value');
      let orgID = await AsyncStorage.getItem('ORGANIZATIONID');
      console.log(JSON.stringify('OrganizationID IS: ' + orgID));
      if (ref.hasChild(orgID)) {
        dispatch({type: LOGGED_IN, payload: orgID});
      } else {
        dispatch({type: 'nada'});
      }
    } catch (error) {
      dispatch({type: 'nada'});
    }
  };
};
