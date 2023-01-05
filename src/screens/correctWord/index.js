import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, CustomStatusBar, Header} from '../../components';
import {color} from '../../theme';
import style from './style';
import SvgIndex from '../../assets/svgIndex';
import {imageindex} from '../../assets';
import screenName from '../../navigation/screenName';

const CorrectWord = props => {
  const rightWord = props?.route?.params?.rightWord;
  return (
    <View style={style.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={color.backgroundTheme}
      />
      <Header
        onPress={() => props.navigation.goBack()}
        leftIcon={SvgIndex.backArrow}
      />
      <View style={style.contentContainer}>
        <Image source={imageindex.correctBubble} style={style.bubbleImage} />
        <Text style={style.wordLabel}>Correct Word is</Text>
        <Text style={style.wordName}>{`"${rightWord}"`}</Text>
        <Button
          buttonContainer={style.buttonContainer}
          name="Continue"
          onPress={() =>
            props.navigation.navigate(screenName.gameScreen, {continue: true})
          }
        />
      </View>
    </View>
  );
};

export default CorrectWord;
