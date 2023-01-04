import {StyleSheet} from 'react-native';
import {color} from '../../theme';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: color.themeColor,
    flex: 1,
  },
  allTimeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: color.white,
    marginTop: 40,
  },
  imageView: {
    position: 'absolute',
    bottom: 35,
    left: 35,
    overflow: 'hidden',
  },

  userNameContainer: {
    marginLeft: 5,
  },
  nameView: {
    position: 'absolute',
    top: 75,
    left: 0,
  },
  flatListContainer: {
    marginTop: 60,
  },

  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  topOneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  topOneImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  secondTopImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  thirdTopImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  topTwoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  topThreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  topOnewordText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: color.white,
  },
  topwordText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: color.white,
  },
  topOneuserNameText: {
    fontSize: 18,
    color: color.white,
  },
  topUserNameText: {
    color: color.white,
    fontSize: 12,
  },
});
