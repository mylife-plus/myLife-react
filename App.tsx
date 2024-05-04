import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import BottomTabNavigator from './src/navigation/HomeNavigator';
import { RecoilRoot } from 'recoil';
import GlobalNavigator from './src/navigation';

export default function App() {
  return (
    <RecoilRoot>
      <GlobalNavigator />
    </RecoilRoot>
  );
}


