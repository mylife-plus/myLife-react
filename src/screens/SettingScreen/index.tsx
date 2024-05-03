import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', padding: 16 }}>
        The screen you're seeing now is still under development. That's why you're seeing this text.
        Once development is complete, the Settings will appear here. Until then, please don't give it much importance.
      </Text>
    </SafeAreaView>
  );
};

export default SettingScreen;
