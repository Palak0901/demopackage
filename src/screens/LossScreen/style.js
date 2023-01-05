import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from '../../theme';

export default StyleSheet.create({
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
  boxContainer: {
    width: '80%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    color: color.buttonGreen,
    marginTop: 15,
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: '70%',
    marginTop: 15,
    marginBottom: 16,
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: color.white,
    marginTop: 10,
    borderColor: color.buttonGreen,
    borderWidth: 1,
    marginBottom: 16,
  },
});
