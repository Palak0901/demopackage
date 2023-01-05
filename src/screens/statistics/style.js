import {StyleSheet} from 'react-native';
import {color, font} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },

  labelText: {
    marginTop: 10,
    fontSize: 16,
    color: color.white,
    textAlign: 'center',
  },
  boxContainer: {
    marginHorizontal: 5,
  },
  boxView: {
    backgroundColor: 'rgba(255,255, 255,0.1)',
    borderWidth: 0.5,
    borderColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  numberText: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statisticsText: {
    fontSize: 25,
    color: color.white,
    textAlign: 'center',
    fontFamily: font.poppinsSemiBold,
  },
  centerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '50%',
  },
});
