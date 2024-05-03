import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SettingsButton from '../buttons/settingsButton/settingsButton';

interface HeaderProps {
  title: string;
  onPressSettings?: () => void; // Optional callback for settings button press
}

const MenuHeader: React.FC<HeaderProps> = ({ title, onPressSettings }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SettingsButton onPress={onPressSettings}  ></SettingsButton>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange title and settings button horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space evenly between items
    paddingHorizontal: 30,
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 10,
    height: 60,
    width: '100%',
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MenuHeader;
