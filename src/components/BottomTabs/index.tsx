import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Memories from '../../screens/memoriesScreen';
import MenuScreen from '../../screens/MenuScreen';

const Tab = createBottomTabNavigator();

function BottomTabLayout() {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red', // Change the color of the active tab label
          inactiveTintColor: 'gray', // Change the color of inactive tab labels
          style: {

            backgroundColor: 'black', // Change background color of the tab bar
            borderTopWidth: 1, // Add a border on top of the tab bar
            borderTopColor: 'lightgray', // Color of the top border
            height: 1000, // Adjust the height of the tab bar
            paddingBottom: 5, // Add padding to the bottom of the tab bar
          },
          labelStyle: {
            fontSize: 14, // Adjust the font size of the tab labels
            fontWeight: 'bold', // Make the tab labels bold
          },
        }}>
        <Tab.Screen name="Settings" component={MenuScreen} />
      </Tab.Navigator>
  );
}

export default BottomTabLayout;
