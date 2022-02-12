import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  )
}

function ResourceScreen() {
  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Resources</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

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
