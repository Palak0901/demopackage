import {View, Text, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {color} from '../../theme';
import {CustomStatusBar, Header} from '../../components';
import {imageindex, svgIndex} from '../../assets';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import style from './style';
import gameContext from '../../context/GameContext';

const UserProfile = props => {
  const gameInterface = useContext(gameContext);
  const userDetails = props?.route?.params?.data;
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
      <SafeAreaProvider>
        <CustomStatusBar />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollViewContainer}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftIcon={() => <svgIndex.backArrow fill={'black'} />}
          />
          <View style={style.mainView}>
            <Text style={style.firstText}>
              {userDetails?.rank.replace('#', '')}
            </Text>
            <Text style={style.stText}>
              {userDetails?.rank == 1
                ? 'st'
                : userDetails?.rank == 2
                ? 'nd'
                : userDetails?.rank == 3
                ? 'rd'
                : 'th'}
            </Text>
          </View>
          <Image source={imageindex.userOne} style={style.imageView} />
          <Text style={style.nameText}>{userDetails?.name}</Text>
          <View style={style.viewContainer}>
            <Text style={style.profileText}>
              Number of words solved :{' '}
              {userDetails?.achievements?.completeWords}
            </Text>
            <Text style={style.profileText}>
              Total Time : {userDetails?.achievements?.totalUseTime}
            </Text>
            <Text style={style.profileText}>
              Number Of Hints : {userDetails?.achievements?.totalUseHints}
            </Text>
            <Text style={style.profileText}>
              Number Of Wrong Words :{' '}
              {userDetails?.achievements?.totalWrongWords}
            </Text>
            <Text style={style.profileText}>
              Number Of Attempts : {userDetails?.achievements?.totalAttempts}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </View>
  );
};

export default UserProfile;
