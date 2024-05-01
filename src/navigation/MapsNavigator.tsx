import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsMenu from '../screens/SettingsMenu';
import CashFlow from '../screens/SettingsMenu/CashFlowSettingScreen';
import MemorySettingScreen from '../screens/SettingsMenu/MemorySettingsScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

export const navigators = [
    
   
    {
        name: 'Map',
        component: MapScreen,
        options: {
            headerShown: false
        }
    },
   
];

const MapNavigator: React.FC = () => {
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

export default MapNavigator;
