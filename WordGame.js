import React from 'react';
import { View, Text, LogBox } from 'react-native';
import Route from './src/navigation';
import { WordGameProps } from './props';
import GameContext from './src/context/GameContext';
import { Provider } from 'react-redux';
import store from './src/services/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
const persistStore = store();
LogBox.ignoreAllLogs();

const WordGame = (props: WordGameProps) => {
  return (
    <View style={{ flex: 1 }}>
      {props.userToken == undefined ? (
        console.log('ERROR 404 : TOKEN Not Define')
      ) : props.userToken == 'YASH2020' ? (
        <GameContext.Provider value={props}>
          <Provider store={persistStore.store}>
            <PersistGate loading={null} persistor={persistStore.persistor}>
              <Route />
            </PersistGate>
          </Provider>
        </GameContext.Provider>
      ) : (
        console.log('TOKEN IS NOT VALID', props?.userToken)
      )}
    </View>
  );
};

export default WordGame;