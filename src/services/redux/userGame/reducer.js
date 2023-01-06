import types from './types';
import moment from 'moment';

const initialState = {
  data: [],
  resumeGame: false,
  todaysPlay: 1,
  gameId: 0,
  gameTime: '120',
  lastPlayOn: moment().toString(),
};
const userGame = (state = initialState, action) => {
  switch (action.type) {
    case types.startGame:
      return {
        ...state,
        data: action.payload.responseJson.data,
        resumeGame: action.payload.responseJson.resumeGame,
        gameId: action.payload.responseJson.gameId,
        gameTime: action.payload.responseJson?.gameTime,
        todaysPlay: action.payload.responseJson?.todaysPlay,
        lastPlayOn: action.payload.responseJson?.lastPlayOn,
      };

    case types.saveGame:
      return {
        ...state,
        data: action.payload.responseJson.data,
        resumeGame: action.payload.responseJson.resumeGame,
        gameId: action.payload.responseJson.gameId,
        gameTime: action.payload.responseJson?.gameTime,
        todaysPlay: action.payload.responseJson?.todaysPlay,
        lastPlayOn: action.payload.responseJson?.lastPlayOn,
      };

    default:
      return state;
  }
};

export default userGame;
