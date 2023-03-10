import {StyleSheet} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {color} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#144345',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 7,
  },
  hintView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    fontSize: 25,
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(13),
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#25595B',
    textAlign: 'center',
    borderRadius: 10,
  },
  boxContainer: {
    backgroundColor: '#25595B',
    margin: responsiveScreenWidth(2.4),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(13),
  },
  listStyle: {
    // alignSelf: 'center',
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 10,
    color: color.white,
  },
  nextText: {
    textAlign: 'right',
    color: '#3DF7FF',
    fontSize: 16,
  },
  hintText: {
    fontSize: 16,
    color: '#FFEE01',
    textDecorationLine: 'underline',
  },
  hintButton: {flex: 1},
  innerContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  timerContainer: {
    borderWidth: 1,
    borderColor: color.yellow,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
    width: '26%',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 14,
    // paddingHorizontal: 20,
    paddingVertical: 5,
    color: color.white,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0.8,
  },
  playButtonContainer: {
    marginTop: 40,
    justifyContent: 'flex-end',
  },
});
export default styles;
