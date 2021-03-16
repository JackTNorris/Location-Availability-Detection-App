import {combineReducers} from 'redux';
import LocationReducer from './LocationReducers';

export default combineReducers({locData: LocationReducer});
