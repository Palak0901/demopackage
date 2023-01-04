import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import style from './style';
import {Button, CustomStatusBar, Header} from '../../components';
import {color} from '../../theme';
import {imageindex, svgIndex} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import gameContext from '../../context/GameContext';

const UnlockScreen = () => {
  const gameInterface = useContext(gameContext);
  const navigation = useNavigation();
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: gameInterface.containerStyle?.themeColor
            ? gameInterface.containerStyle?.themeColor
            : color.themeColor,
        },
        gameInterface?.containerStyle?.contentContainerStyle,
      ]}>
      <CustomStatusBar />
      <Header
        leftIcon={svgIndex.backArrow}
        onPress={() => navigation.goBack()}
      />
      <View style={style.centerView}>
        <Image source={imageindex.lockWhite} style={style.imageStyle} />
        <Text style={style.unlockText}>Unlock new game</Text>
        <Text style={style.descriptionText}>
          You can unlock a new wordle game{'\n'} before the new time is unlocked
          {'\n '}
          for 5 TerCoins from your{'\n '} TerCoin Wallett
        </Text>
        <Button
          name={'Unlock after 10 Minutes(free)'}
          buttonContainer={style.freeButton}
        />
        <Button
          name={'Unlock immediately (5 TerCOINS)'}
          buttonContainer={style.coinButton}
          buttonText={{color: color.buttonGreen}}
        />
      </View>
    </View>
  );
};

export default UnlockScreen;
