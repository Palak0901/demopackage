import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },
  mainView: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  howToPlayText: {
    fontSize: 30,
    color: color.white,
    fontWeight: 'bold',
  },
  triesText: {
    fontSize: 20,
    marginTop: 10,
    color: color.white,
    fontWeight: 'bold',
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  letterText: {
    fontSize: 15,
    marginLeft: 8,
    color: color.white,
    fontWeight: '500',
  },
  exampleText: {
    fontSize: 25,
    fontWeight: '400',
    color: color.white,
    marginTop: 30,
  },
  gameView: {
    borderWidth: 0.8,
    height: 340,
    width: 330,
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 10,
    borderColor: color.white,
    backgroundColor: color.bagroundTheme,
  },
  nextButton: {
    width: '50%',
    marginTop: 30,
    alignSelf: 'center',
  },
  boxContainer: {
    backgroundColor: '#25595B',
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(12),
    margin: responsiveScreenWidth(1.2),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 8,
  },
  itemText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#25595B',
    textAlign: 'center',
  },
  contentContainerStyle: {
    alignSelf: 'center',
  },
  wText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color.white,
  },
  textOne: {
    paddingHorizontal: 26,
    marginTop: 10,
    fontSize: 16,
    color: color.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});
