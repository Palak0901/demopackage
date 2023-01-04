import {View, Text, Modal, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './style';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {imageindex} from '../../assets';
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
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={completeGameModal}
    //   onRequestClose={() => {
    //     Alert.alert('Modal has been closed.');
    //     setCompleteGameModal(!completeGameModal);
    //   }}>
    <View style={styles.modalContainer}>
      <View style={styles.boxContainer}>
        <Image source={imageindex.trophy} style={styles.imageStyle} />
        <Text style={styles.congratulationsText}>Congratulations</Text>
        <Text style={styles.descriptionText}>
          You have mastered the{'\n'}Eco Words challenge
        </Text>

        <Button
          onPress={() => navigation.replace(screenName.statisticsScreen)}
          name={'Unlock after 10 Minutes(free)'}
          buttonContainer={styles.freeButton}
        />
        <Button
          name={'Unlock immediately (5 TerCOINS)'}
          buttonContainer={styles.coinButton}
          buttonText={{color: color.buttonGreen}}
          onPress={() => navigation.replace(screenName.statisticsScreen)}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
