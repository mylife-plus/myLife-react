// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import Memories from '../memoriesScreen';
import BottomTabLayout from '../../components/BottomTabs';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      
    </View>
  );
};

export default HomeScreen;
