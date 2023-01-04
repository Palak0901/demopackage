import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {styles} from './style';

const Header = ({
  onPress,
  rightIcon,
  leftIcon,
  onRightIcon,
  title,
  rightText,
}) => {
  const RightIcon = rightIcon;
  const LeftIcon = leftIcon;
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity style={styles.leftIcon} onPress={onPress}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      {rightIcon && (
        <TouchableOpacity style={styles.rightIcon} onPress={onRightIcon}>
          <RightIcon />
        </TouchableOpacity>
      )}
      {rightText && (
        <TouchableOpacity style={styles.rightIcon} onPress={onRightIcon}>
          <Text style={styles.rightText}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Header);
