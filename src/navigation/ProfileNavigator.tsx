// ProfileNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsMenu from '../screens/SettingsMenu';
import CashFlow from '../screens/SettingsMenu/CashFlowSettingScreen';
import MemorySettingScreen from '../screens/SettingsMenu/MemorySettingsScreen';

const Stack = createStackNavigator();

export const navigators = [
  
    {
        name: 'Profile',
        component: ProfileScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Home',
        component: HomeScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Setting',
        component: SettingsMenu,
        options: {
            headerShown: true,
            headerStyle: {
                shadowOpacity: 0, // Remove shadow for iOS
                elevation: 0, // Remove shadow for Android
                borderBottomWidth: 0, 
            },
            headerBackTitleVisible: false, 
            headerTintColor: 'black', 
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image 
                        source={require('../../assets/Menu-Icons/gear.png')} 
                        style={{ width: 20, height: 20, marginRight: 10 }} 
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'regular' }}>Settings</Text>
                </View>
            ),
        }
    },
    {
        name: 'Cashflow',
        component: CashFlow,
        options: {
            headerShown: true,
            headerStyle: {
                shadowOpacity: 0, // Remove shadow for iOS
                elevation: 0, // Remove shadow for Android
                borderBottomWidth: 0, 
            },
            headerBackTitleVisible: false,
            headerTintColor: 'black', // Set the color of the back button
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image 
                        source={require('../../assets/Settings-Icons/cashIcon.png')} // Replace with your actual icon path
                        style={{ width: 20, height: 20, marginRight: 10 }} 
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'regular' }}>Cashflow</Text>
                </View>
            ),
        }
    },
    {
        name: 'Memory',
        component: MemorySettingScreen,
        options: {
            headerShown: true,
            headerStyle: {
                shadowOpacity: 0, // Remove shadow for iOS
                elevation: 0, // Remove shadow for Android
                borderBottomWidth: 0, 
            },
            headerBackTitleVisible: false,
            headerTintColor: 'black', // Set the color of the back button
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image 
                        source={require('../../assets/Settings-Icons/memoryIcon.png')} // Replace with your actual icon path
                        style={{ width: 20, height: 20, marginRight: 10 }} 
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'regular' }}>Memory</Text>
                </View>
            ),
        }
    }
];

const ProfileNavigator: React.FC = () => {
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

export default ProfileNavigator;
