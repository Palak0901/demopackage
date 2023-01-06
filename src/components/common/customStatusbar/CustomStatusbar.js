import React, { memo, useContext } from 'react';
import { View, StatusBar, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import gameContext from '../../../context/GameContext';
import { color } from '../../../theme';
type propType = {
  containerStyle: StyleProp<ViewStyle>,
  backgroundColor: String,
  translucent: Boolean,
  barStyle?: 'default' | 'dark-content' | 'light-content',
};
const CustomStatusBar = (props: propType) => {
  const insets = useSafeAreaInsets();
  const gameInterface = useContext(gameContext);
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: gameInterface?.containerStyle?.themeColor
            ? gameInterface?.containerStyle?.themeColor
            : color.themeColor,
        },
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={
          props.backgroundColor || gameInterface?.containerStyle?.themeColor
            ? gameInterface?.containerStyle?.themeColor
            : color.themeColor
        }
        barStyle={'light-content'}
        translucent={props.translucent}
        {...props}
      />
    </View>
  );
};

CustomStatusBar.defaultProps = {
  backgroundColor: color.backgroundTheme,
  barStyle: 'light-content',
};

export default memo(CustomStatusBar);
