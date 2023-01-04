import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    width: '70%',
  },
  advanceButton: {
    marginTop: 20,
  },
});
