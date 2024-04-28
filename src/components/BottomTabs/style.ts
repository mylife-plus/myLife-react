import {  StyleSheet } from 'react-native';

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      height: 50,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedTab: {
      backgroundColor: '#c0c0c0',
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    screenContainer: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
  });
