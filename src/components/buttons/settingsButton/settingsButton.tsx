import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const settingIcon = require('../../../../assets/Menu-Icons/gear.png');

interface SettingsButtonProps {
  onPress?: () => void;
  text?: string;
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ onPress, text = 'Settings' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image source={settingIcon} style={styles.icon} />
        {/* <Text style={styles.text}>{text}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row', // Ensure icon and text are aligned horizontally
    alignItems: 'center', // Align icon and text vertically
    borderRadius: 5,
    // backgroundColor: '#e0e0e0',
  },
  icon: {
    marginRight: 5, // Add some spacing between icon and text
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SettingsButton;
