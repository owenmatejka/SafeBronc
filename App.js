import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

HomeScreen = require('./Navigation/Home');
ResourceScreen = require('./Navigation/Resources');

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = "Home"
      screenOptions = {{
        tabBarActiveTintColor: "maroon"
      }}>
        <Tab.Screen
        name = "Home"
        component = {HomeScreen}
        />
        <Tab.Screen
        name = "Resources"
        component = {ResourceScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
