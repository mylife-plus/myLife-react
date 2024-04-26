import { StyleSheet } from 'react-native';
import normalize from '../helpers/normalize';
import Font from '../../assets/fonts';
export const styles = StyleSheet.create({
  headerBackground: {
    height: '100%',
    width: '100%',
  },
  headerStyle: {
    elevation: 0,
    shadowRadius: 0,
    flex: 1,
  },
  headerStyleDefault: {

    shadowColor: 'transparent',
  },
  headerTitleHomeStyle: {
    alignSelf: 'center',
  },

  headerTitleStyle: {
    alignSelf: 'center',
  },
  headerTitleStyleDefault: {
    fontSize: normalize(18),
  },
  iconDefault: {
    paddingLeft: normalize(18)
  }, imageLayout: {
    height: normalize(55),
  },
  imageStyle: {
    height: normalize(110),
    alignSelf: 'center',
    width: normalize(110),

  },
  leftCloseIconStyle: {
    paddingLeft: normalize(10),
  },
  leftIconStyle: {
    paddingLeft: normalize(16),
  },
  rightIconStyle: {
    paddingTop: 0,
    paddingRight: normalize(18),
  },
  centerTextStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: normalize(17),
    fontFamily: Font.Regular,
  },
  badge: {
    backgroundColor: 'red',
    width: normalize(5),
    height: normalize(5),
    position: 'absolute',
    left: normalize(15),
    top: normalize(4),
    borderRadius: normalize(1000),
  },
});
