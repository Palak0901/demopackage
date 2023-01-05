import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: color.themeColor,
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstText: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '600',
    color: color.white,
  },
  stText: {
    fontSize: 20,
    lineHeight: 28,
    color: color.white,
  },
  imageView: {
    height: 90,
    width: 90,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: color.themeColor,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  nameText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: '600',
    color: color.white,
  },
  viewContainer: {
    borderWidth: 0.2,
    borderRadius: 12,
    paddingHorizontal: 35,
    marginTop: 80,
    padding: 20,
    alignSelf: 'center',
    borderColor: color.white,
    width: '75%',
  },
  profileText: {
    fontSize: 15,
    fontWeight: '500',
    color: color.white,
    lineHeight: 40,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
});
