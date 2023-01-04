import {View, Text, Modal, Image} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import style from './style';
import {imageindex} from '../../assets';
import {color} from '../../theme';
import {Button} from '../../components';
const LossScreen = () => {
  const [lossGameModal, setLossGameModal] = useState(false);
  useFocusEffect(
    useCallback(() => {
      setLossGameModal(true);
    }, []),
  );
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={lossGameModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setLossGameModal(!completeGameModal);
      }}>
      <View style={style.modalContainer}>
        <View style={style.boxContainer}>
          <Image
            source={imageindex.lossImage}
            style={{height: 70, width: 70, marginTop: 16}}
          />
          <Text style={style.titleText}>No Worries..</Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              color: color.gray,
              textAlign: 'center',
              lineHeight: 18,
            }}>
            You can try again after{'\n'}30 minutes
          </Text>
          <Button
            onPress={() => navigation.goBack()}
            name={'Unlock after 10 Minutes(free)'}
            buttonContainer={{width: '90%', marginTop: 30}}
          />
          <Button
            name={'Unlock immediately (5 TerCOINS)'}
            buttonContainer={{
              width: '90%',
              backgroundColor: color.white,
              marginTop: 10,
              borderColor: color.buttonGreen,
              borderWidth: 1,
              marginBottom: 16,
            }}
            buttonText={{color: color.buttonGreen}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LossScreen;
