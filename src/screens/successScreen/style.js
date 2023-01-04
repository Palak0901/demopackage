import {StyleSheet} from 'react-native';
import {color} from '../../theme';

const styles = StyleSheet.create({
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
  buttonStyle: {
    width: '70%',
    marginTop: 15,
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: color.gray,
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 18,
  },
  congratulationsText: {
    fontSize: 16,
    color: color.buttonGreen,
    marginTop: 15,
  },
  imageStyle: {
    height: 100,
    width: 100,
    marginTop: 16,
  },
  boxContainer: {
    width: '80%',
    backgroundColor: color.white,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  freeButton: {
    width: '90%',
    marginTop: 30,
  },
  coinButton: {
    width: '90%',
    backgroundColor: color.white,
    marginTop: 10,
    borderColor: color.buttonGreen,
    borderWidth: 1,
    marginBottom: 16,
  },
});
export default styles;
