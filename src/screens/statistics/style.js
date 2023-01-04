import {StyleSheet} from 'react-native';
import {color} from '../../theme';

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
    flex: 1,
    alignItems: 'center',
  },
  boxView: {
    backgroundColor: 'rgba(255,255, 255,0.1)',
    borderWidth: 0.5,
    borderColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: color.bagroundTheme,
  },
  numberText: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    fontSize: 20,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxMainView: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 10,
  },
  statisticsText: {
    fontSize: 25,
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centerContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
