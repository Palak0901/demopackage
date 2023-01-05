import {StyleSheet} from 'react-native';
import {color, font} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.modalTransparant,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteLabel: {
    fontSize: 18,
    color: color.tillBlack,
    fontFamily: font.poppinsMedium,
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: color.gray,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: font.poppinsRegular,
  },
});
