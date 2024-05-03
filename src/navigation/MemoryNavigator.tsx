import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsMenu from '../screens/SettingsMenu';
import CashFlow from '../screens/SettingsMenu/CashFlowSettingScreen';
import MemorySettingScreen from '../screens/SettingsMenu/MemorySettingsScreen';
import Memories from '../screens/memoriesScreen';

const Stack = createStackNavigator();

export const navigators = [
 
 
  
 
    {
        name: 'Memory',
        component: Memories,
        options: {
            headerShown: false,
            headerStyle: {
                shadowOpacity: 0, 
                elevation: 0, 
                borderBottomWidth: 0, 
            },
            headerBackTitleVisible: false,
            headerTintColor: 'black', 
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image 
                        source={require('../../assets/Settings-Icons/memoryIcon.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} 
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'regular' }}>Memory</Text>
                </View>
            ),
        }
    }
];

const MemoriesNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerBackImage: () => (
                    <Image 
                        source={require('../../assets/Settings-Icons/goBackIcon.png')} 
                        style={{ width: 25, height: 25, marginLeft: 27 }} 
                    />
                ),
            }}
        >
            {navigators.map((item, index) => (
                <Stack.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={item.options}
                />
            ))}
        </Stack.Navigator>
    );
};

export default MemoriesNavigator;
