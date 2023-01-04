import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.themeColor,
  },
  textImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 25,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageStyle: {
    width: 250,
    height: 250,
    marginTop: 5,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 25,
    color: color.white,
    textAlign: 'center',
    paddingTop: 32,
  },
  readyText: {
    fontSize: 16,
    lineHeight: 20,
    color: color.lightGreen,
    marginTop: 15,
  },
});
