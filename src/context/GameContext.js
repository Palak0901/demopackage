import {createContext} from 'react';

const gameContext = createContext({
  userToken: String,
});

export default gameContext;
