import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import authStack from './stack/authStack';
import {navigationRef} from '../utility/navigationService';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>{authStack()}</NavigationContainer>
  );
};

export default Route;
