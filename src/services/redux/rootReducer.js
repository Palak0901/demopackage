import { combineReducers } from 'redux';
import userGame from './userGame/reducer';

const rootReducer = combineReducers({
  userGame: userGame,
});

export default rootReducer;
