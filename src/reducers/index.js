import { combineReducers } from 'redux';
import NotesDataReducer from './notes-data-Reducer';
import UserDataReducer from './user-data-Reducer';

const reducers = {
  NotesDataReducer,
  UserDataReducer
};
const rootReducers = combineReducers(reducers);
export default rootReducers;
