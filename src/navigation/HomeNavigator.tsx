/* This code snippet is a TypeScript React component that defines a bottom tab navigator for a mobile
application using React Navigation. Here's a breakdown of what the code is doing: */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CashflowScreen from '../screens/SettingsMenu/CashFlowSettingScreen';
import Memories from '../screens/memoriesScreen';
import SettingsMenu from '../screens/SettingsMenu';
import SettingNavigator from './SettingNavigator';
import MemoriesNavigator from './MemoryNavigator';
import MapNavigator from './MapsNavigator';
import ProfileNavigator from './ProfileNavigator';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false, // Hide the tab labels
                
            }}
            screenOptions={{
                tabBarStyle: { backgroundColor: 'transparent',borderBlockColor: 'transparent'},
              }}
            
        >
            <Tab.Screen 
                name="Home" 
                component={MemoriesNavigator} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIconContainer, focused && styles.focused]}>
                            <Image
                                source={require('../../assets/Bottom-Tabs-Icons/mobile.png')}
                                style={styles.tabIcon}
                            />
                        </View>
                    ),
                    headerTitle: 'Home' // Modify the title here
                }}
            />
            <Tab.Screen 
                name="Map" 
                component={MapNavigator} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIconContainer, focused && styles.focused]}>
                            <Image
                                source={require('../../assets/Bottom-Tabs-Icons/world-map.png')}
                                style={styles.tabIcon}
                            />
                        </View>
                    ),
                    headerTitle: 'Profile' // Modify the title here
                }}
            />
            <Tab.Screen 
                name="Cashflow" 
                component={ContactScreen} 
                options={{
                    headerShown: false,

                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.tabIconContainer, focused && styles.focused]}>
                            <Image
                                source={require('../../assets/Bottom-Tabs-Icons/person.png')}
                                style={styles.tabIcon}
                            />
                        </View>
                    ),
                    headerTitle: 'Cashflow' // Modify the title here
                }}
            />
           <Tab.Screen 
    name="setting" 
    component={SettingNavigator} 
    options={{
        tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, focused && styles.focused]}>
                <Image
                    source={require('../../assets/Menu-Icons/gear.png')}
                    style={styles.tabIcon}
                />
            </View>
        ),
        headerShown: false,
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
                    style={{ width: 20, height: 20, marginRight: 10,  }} 
                />
                <Text style={{ fontSize: 20, fontWeight: 'normal' }}>Settings</Text>
            </View>
        ),
    }}
/>


        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabIconContainer: {
        opacity: 0.2,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 24, // Adjust the width of the tab icons
        height: 24, // Adjust the height of the tab icons
        
    },
    focused: {
        // backgroundColor: '#CCCCCC', // Background color when the tab is focused
        opacity : 1
        
    },
});

export default BottomTabNavigator;
