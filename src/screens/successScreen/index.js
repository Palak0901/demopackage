import {View, Text, Modal, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './style';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {imageindex, svgIndex} from '../../assets';
import {color} from '../../theme';
import {Button} from '../../components';
import screenName from '../../navigation/screenName';
const SuccessScreen = () => {
  const [completeGameModal, setCompleteGameModal] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setCompleteGameModal(true);
    }, []),
  );
  const navigation = useNavigation();
  return (
    <View style={styles.modalContainer}>
      <View style={styles.boxContainer}>
        <Image source={imageindex.trophy} style={styles.imageStyle} />
        <Text style={styles.congratulationsText}>Congratulations</Text>
        <Text style={styles.descriptionText}>
          You have mastered the{'\n'}ECO Words challenge.
        </Text>

        <Button
          onPress={() => navigation.navigate(screenName.statisticsScreen)}
          name={'Unlock after 10 Minutes (free)'}
          buttonContainer={styles.freeButton}
        />
        <Button
          name={'Unlock immediately (5 TerCoins)'}
          buttonContainer={styles.coinButton}
          buttonText={styles.secondaryButton}
          onPress={() => navigation.navigate(screenName.statisticsScreen)}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
