import {combineReducers} from 'redux';
import LocationReducer from './LocationReducers';
import LoginReducer from './LoginReducers';

export default combineReducers({locData: LocationReducer, login: LoginReducer});
