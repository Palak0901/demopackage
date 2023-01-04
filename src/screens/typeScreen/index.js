import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Button, CustomStatusBar} from '../../components';
import {color} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import screenName from '../../navigation/screenName';

const Types = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.buttonContainer}>
        <Button
          name={'Easy'}
          buttonContainer={styles.buttonStyle}
          onPress={() => navigation.navigate(screenName.gameScreen)}
        />
        <Button
          name={'Advance'}
          buttonContainer={[styles.buttonStyle, styles.advanceButton]}
          onPress={() => navigation.navigate(screenName.statisticsScreen)}
        />
      </View>
    </View>
  );
};

export default Types;
