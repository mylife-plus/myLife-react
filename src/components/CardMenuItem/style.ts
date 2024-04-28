import { StyleSheet } from 'react-native';
import normalize from '../../helpers/normalize';

export const styles = StyleSheet.create({
  container: {
    margin: 20, // Adjust margin to make the card smaller
    borderRadius: 10,
    width: normalize(88),
    backgroundColor: 'transparent', // Set background color to transparent
    overflow: 'hidden', // Clip overflow to prevent shadow from appearing outside the card
    shadowColor: 'transparent', // Set shadow color to transparent
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100, // Adjust height of the image
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14, // Adjust font size of the title
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12, // Adjust font size of the description
  },
});
