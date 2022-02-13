import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

module.exports = () => {
    return (
        <View style={styles.container}>
        </View >
    
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#9b2226',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })