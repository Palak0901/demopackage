import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/welcomeScreen';
import screenName from '../screenName';
import Types from '../../screens/typeScreen';
import GameScreen from '../../screens/gameScreen';
import SuccessScreen from '../../screens/successScreen';
import LossScreen from '../../screens/LossScreen';
import UnlockScreen from '../../screens/unlockGameScreen';
import StatisticsScreen from '../../screens/statistics';
import LeaderBoard from '../../screens/leaderBoard';
import UserProfile from '../../screens/userProfile';
import GameRules from '../../screens/gameRules';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../../utility/navigationService';
import CorrectWord from '../../screens/correctWord';

const Stack = createStackNavigator();
const authStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={GameRules} name={screenName.gameRules} />
      <Stack.Screen component={WelcomeScreen} name={screenName.welcomeScreen} />
      <Stack.Screen component={Types} name={screenName.typeScreen} />
      <Stack.Screen component={GameScreen} name={screenName.gameScreen} />
      <Stack.Screen
        component={SuccessScreen}
        name={screenName.successScreen}
        options={{ presentation: 'transparentModal' }}
      />
      <Stack.Screen
        component={LossScreen}
        name={screenName.lossScreen}
        options={{ presentation: 'transparentModal' }}
      />
      <Stack.Screen component={UnlockScreen} name={screenName.unlockScreen} />
      <Stack.Screen
        component={StatisticsScreen}
        name={screenName.statisticsScreen}
      />
      <Stack.Screen component={LeaderBoard} name={screenName.leaderBoard} />
      <Stack.Screen component={UserProfile} name={screenName.userProfile} />
      <Stack.Screen component={CorrectWord} name={screenName.correctWord} />
    </Stack.Navigator>
  );
};

export default authStack;
