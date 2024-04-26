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


const GlobalNavigator: React.FC = () => {
    const { appConfig, setAppState } = useAppState();

    useEffect(() => {
        console.log('Current app state:', appConfig.appState);
    
        // setAppState('NewAppState');
      }, [appConfig, setAppState]);
    const renderNavigator = () =>{
        // if (appConfig.appState === NavigationState.LOGIN) {
        //     return <LoginNavigator/>
        // }
        // else if (appConfig.appState === NavigationState.HOME) {
            return <BottomTabNavigator/>
        // }
        // return;
    }

  return (
  
    <NavigationContainer>
    {renderNavigator()}
  </NavigationContainer>
 
  );
};

export default GlobalNavigator;
