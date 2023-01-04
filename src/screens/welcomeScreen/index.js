import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from './style';
import {
  CustomStatusBar,
  Header,
  ShareModal,
  UnlockGame,
} from '../../components';
import {color} from '../../theme';
import {imageindex, svgIndex} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import screenName from '../../navigation/screenName';
import gameContext from '../../context/GameContext';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [shareVisible, setShareVisible] = useState(false);
  const [unlockGame, setUnlockGame] = useState(false);
  const gameInterface = useContext(gameContext);

  return (
    <View style={[styles.container, gameInterface?.containerStyle]}>
      <CustomStatusBar />
      <Header
        onPress={() => setUnlockGame(!unlockGame)}
        leftIcon={svgIndex.backArrow}
        rightIcon={svgIndex.share}
        onRightIcon={() => setShareVisible(!shareVisible)}
      />
      <View style={styles.textImageContainer}>
        <Text style={styles.textStyle}>
          Now is the time to become{'\n'}a new eco-hero
        </Text>
        <Image source={imageindex.welcomeImage} style={styles.imageStyle} />
        <Text style={styles.descriptionText}>
          Sharing knowlege best practises{'\n'} and expertise while creating a
          greener{'\n'} community: that is what TERUM is about.
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(screenName.typeScreen)}>
          <Text style={styles.readyText}>Are you ready to join us?</Text>
        </TouchableOpacity>
      </View>
      <ShareModal
        visible={shareVisible}
        onRequestClose={() => setShareVisible(!shareVisible)}
      />
      <UnlockGame
        visible={unlockGame}
        onRequestClose={() => setUnlockGame(!unlockGame)}
        onOkPress={() => {
          setUnlockGame(!unlockGame);
          navigation.navigate(screenName.unlockScreen);
        }}
        onCancel={() => {
          setUnlockGame(!unlockGame);
        }}
      />
    </View>
  );
};

export default WelcomeScreen;
