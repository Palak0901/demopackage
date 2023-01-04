import React from 'react';
import { View, Text } from 'react-native';
import Route from './src/navigation';
import { WordGameProps } from './props';
import GameContext from './src/context/GameContext';
import colors from './src/theme/color';

const WordGame = (props: WordGameProps) => {
  return (
    <View style={{ flex: 1 }}>
      {props.userToken == undefined ? (
        console.log('ERROR 404 : TOKEN Not Define')
      ) : props.userToken == 'YASH2020' ? (
        <GameContext.Provider value={props}>
          <Route />
        </GameContext.Provider>
      ) : (
        console.log('TOKEN IS NOT VALID', props?.userToken)
      )}
    </View>
  );
};

export default WordGame;
