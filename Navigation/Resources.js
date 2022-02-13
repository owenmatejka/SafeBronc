import { StyleSheet, Text, View } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

module.exports = () => {
    return (
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Resources</Text>
        </View>
      )
}

