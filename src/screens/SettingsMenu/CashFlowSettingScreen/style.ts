import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: '600',
      marginLeft: 15,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    text: {
      fontSize: 20,
      marginLeft: 15,
    },
    addIcon: {
      width: 39,
      height: 40,
    },
  });

  export default styles;