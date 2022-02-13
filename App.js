import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

HomeScreen = require('./Navigation/Home');
ResourceScreen = require('./Navigation/Resources');
PanicScreen = require('./Navigation/Panic');
EventScreen = require('./Navigation/Events');

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = "Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Resources') {
            iconName = focused
              ? 'bookmarks'
              : 'bookmarks-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Panic') {
            iconName = focused
              ? 'alert-octagon'
              : 'alert-octagon-outline'
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Events') {
            iconName = focused
              ? 'events'
              : 'events-outline';
              return <Ionicons name="people-outline" size={size} color={color} />;
        }
      },

        tabBarActiveTintColor: 'maroon',
      })}>
        <Tab.Screen
        name = "Home"
        component = {HomeScreen}
        />
        <Tab.Screen
        name = "Resources"
        component = {ResourceScreen}
        />
        <Tab.Screen
        name = "Panic"
        component = {PanicScreen}
        />
        <Tab.Screen
        name = "Events"
        component = {EventScreen}
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
