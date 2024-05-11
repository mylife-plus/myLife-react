import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD665',
  },
  transparentHolder: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  icon: {
    width: 35,
    height: 32,
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#000',
  },
  arrow: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  notification: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 5,
    marginRight: 5,
  },
  notificationText: {
    color: '#fff',
  },
  spacer: {
    height: 20, 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
  },
});

export default styles;
