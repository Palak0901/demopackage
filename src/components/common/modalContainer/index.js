import {View, Text, Modal} from 'react-native';
import React from 'react';
import {color} from '../../../theme';

const ModalContainer = ({visible, onRequestClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: color.modalTransparant,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: color.white,
            padding: 16,
            width: '80%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
