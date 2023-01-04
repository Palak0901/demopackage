import {StyleSheet} from 'react-native';
import {color} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: 22,
    color: color.white,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  leftIcon: {
    padding: 8,
  },
  rightIcon: {
    padding: 8,
  },
  rightText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.skyBlue,
  },
});
