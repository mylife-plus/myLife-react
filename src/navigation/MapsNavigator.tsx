/* This code snippet is defining a React component called `MapNavigator` that uses the
`createStackNavigator` function from the `@react-navigation/stack` library to create a stack
navigator for navigating between different screens in a React Native application. */
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
        name: 'MapScreen',
        component: MapScreen,
        options: {
            headerShown: false
        }
    },
   
];

/* The `const MapNavigator: React.FC = () => { ... }` block in the code snippet is defining a
functional component named `MapNavigator` using TypeScript and React. Inside this component, it
returns a `Stack.Navigator` component from the `@react-navigation/stack` library. */
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
/* This part of the code snippet is defining the screens within the `MapNavigator` component using the
`Stack.Screen` component provided by the `@react-navigation/stack` library. */
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
