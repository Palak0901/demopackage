import {StyleSheet} from 'react-native';
import {color, font} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundTheme,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordLabel: {
    fontSize: 18,
    color: color.white,
    marginTop: 40,
    fontFamily: font.poppinsBold,
  },
  wordName: {
    fontSize: 30,
    color: color.wrongSpot,
    fontFamily: font.poppinsBold,
  },
  bubbleImage: {
    height: 75,
    width: 75,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 30,
  },
});
