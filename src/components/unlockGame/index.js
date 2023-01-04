import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {ModalContainer} from '../';
import {imageindex} from '../../assets';
import {color} from '../../theme';
import Button from '../common/button/Button';
import style from './style';
const UnlockGame = ({visible, onRequestClose, onCancel, onOkPress}) => {
  return (
    <ModalContainer visible={visible} onRequestClose={onRequestClose}>
      <Image source={imageindex.lock} style={style.imageStyle} />
      <Text style={style.PlayedText}>You have played</Text>
      <Text style={style.perDayText}>10 words per day</Text>
      <Text style={style.unlockText}>
        unlock more game with {'\n'}spending 30 TerCoin
      </Text>
      <View style={style.buttonVIew}>
        <Button
          onPress={onCancel}
          name={'Cancel'}
          buttonContainer={style.cancelButton}
        />
        <Button
          name={'Ok'}
          buttonContainer={style.okButton}
          onPress={onOkPress}
        />
      </View>
    </ModalContainer>
  );
};

export default UnlockGame;
