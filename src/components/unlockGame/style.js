import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export default styles = StyleSheet.create({
  okButton: {
    flex: 1,
    marginLeft: 3,
  },
  cancelButton: {
    flex: 1,
    marginRight: 3,
    backgroundColor: color.lightGreenShade,
  },
  buttonVIew: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  unlockText: {
    fontSize: 14,
    color: color.gray,
    textAlign: 'center',
    marginTop: 20,
  },

  perDayText: {
    textAlign: 'center',
    fontSize: 20,
    color: color.buttonGreen,
    marginTop: 5,
  },
  PlayedText: {
    fontSize: 20,
    color: color.gray,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
});
