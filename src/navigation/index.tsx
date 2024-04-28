import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsMenu from '../screens/SettingsMenu';
import CashFlow from '../screens/SettingsMenu/CashFlowSettingScreen';
import MemorySettingScreen from '../screens/SettingsMenu/MemorySettingsScreen';
import BottomTabLayout from '../components/BottomTabs';
import { NavigationState } from './state';
import { useAppState } from '../state/App/AppSelectors';
import BottomTabNavigator from './HomeNavigator';
import LoginNavigator from './LoginNavigator';

const Stack = createStackNavigator();

/**
 * GlobalNavigator component serves as the root navigator for the application.
 * It manages the navigation state and routes between different navigators based on the app's state.
 */
const GlobalNavigator: React.FC = () => {
    // Access the application configuration and state management functions
    const { appConfig, setAppState } = useAppState();

    /**
     * useEffect hook logs the current app state and can be used for side effects.
     * For example, updating the app state when certain conditions are met.
     */
    useEffect(() => {
        console.log('Current app state:', appConfig.appState);
        
        // Example usage: Updating the app state when needed
        // setAppState('NewAppState');
    }, [appConfig, setAppState]);

    /**
     * Function to determine which navigator to render based on the app's state.
     * Uncomment the conditional statements to switch between different navigators.
     */
    const renderNavigator = () => {
        // Uncomment the following lines to handle different navigation states
        // if (appConfig.appState === NavigationState.LOGIN) {
        //     return <LoginNavigator />
        // } else if (appConfig.appState === NavigationState.HOME) {
            return <BottomTabNavigator />
        // }

        // Return nothing if no matching state
        // return;
    };

    /**
     * Renders the main application navigation container with the appropriate navigator
     * based on the current app state.
     */
    return (
        <NavigationContainer>
            {renderNavigator()}
        </NavigationContainer>
    );
};

export default GlobalNavigator;
