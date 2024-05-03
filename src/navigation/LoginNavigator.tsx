import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsMenu from '../screens/SettingsMenu';
import CashFlow from '../screens/SettingsMenu/CashFlowSettingScreen';
import MemorySettingScreen from '../screens/SettingsMenu/MemorySettingsScreen';
import PinCodeInput from '../screens/PinLoginScreen';

const Stack = createStackNavigator();

export const navigators = [
   
    {
        name: 'login',
        component: PinCodeInput,
        options: {
            headerShown: false
        }
    },
   
   
   
];

const LoginNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: 'black',

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

export default LoginNavigator;
