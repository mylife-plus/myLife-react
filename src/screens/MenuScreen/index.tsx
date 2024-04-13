// src/screens/MenuScreeen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreeen: React.FC = () => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',width:100 }}>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={goToProfile} />
    </View>
  );
};

export default MenuScreeen;
