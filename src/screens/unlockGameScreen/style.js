import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },
  coinButton: {
    width: '70%',
    backgroundColor: color.white,
    marginTop: 15,
  },
  freeButton: {
    width: '70%',
    marginTop: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: color.white,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  unlockText: {
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
