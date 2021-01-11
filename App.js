import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingScreen';


const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name = "Home" component = {HomeScreen} />
        <TabNav.Screen name = "Profile" component = {ProfileScreen} />
        <TabNav.Screen name = "Settings" component = {SettingsScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}
