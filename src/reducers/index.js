import { combineReducers } from 'redux';
import lockerReducer from './locker-reducer';

export default combineReducers({
    lockers: lockerReducer
})