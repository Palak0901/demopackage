import React, {memo} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {color} from '../../../theme';
type propType = {
  name: String,
  onPress: Function,
  buttonContainer: StyleProp<ViewStyle> | undefined,
  buttonText: StyleProp<TextStyle> | undefined,
  leftIcon: Function,
};
const Button = (props: propType) => {
  const LeftIcon = props.leftIcon;
  return (
    <TouchableOpacity
      style={[styles.btnContent, props.buttonContainer]}
      activeOpacity={0.6}
      onPress={props.onPress}>
      {props.leftIcon && <LeftIcon style={{marginRight: 10}} />}
      <Text style={[styles.btnTxt, props.buttonText]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
const styles = StyleSheet.create({
  btnContent: {
    height: 44,
    backgroundColor: color.buttonGreen,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnTxt: {
    fontSize: 14,
    // fontFamily: FontFamily.interSemiBold,
    color: color.white,
  },
});
