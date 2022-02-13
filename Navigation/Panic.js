import { Animated, StyleSheet, TouchableOpacity, Button, Alert, Text, View } from 'react-native';
import React, { useState, useCallback, useRef } from "react";

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const handlerLongClick = () => {
  //handler for Long Click
  Alert.alert("Are you sure?","You're about to send out a creep alert!",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Yes", onPress: () => {
      fetch('http://172.31.198.22:8081/runAlert', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Owen',
        })
      });
    } } //Add backend event handler here
  ]);
};

let continueRun = false; // Checks to see if button still is pressed
async function runProgressWheel () {
  const currentDate = new Date()  
  const startTime = Math.round(currentDate.getTime())

  let activeDate = new Date()  
  let currentTime = Math.round(activeDate.getTime())
  
  while ( currentTime - startTime < 2500 && continueRun) {
    activeDate = new Date()
    currentTime = Math.round(activeDate.getTime())
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (continueRun) {
    handlerLongClick();
  }
}
module.exports = () => {
  

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.timing(animation, {
      toValue: .5,
      useNativeDriver: true,

    }).start();
    continueRun = true;
    runProgressWheel();
  };
  
  const onPressOut = () => {
    continueRun = false;
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };


  return (
    
      <View style={styles.container}>
          <Text style={styles.textStyle}>
            See a Creeper? Press and Hold Button for 3 Seconds
          </Text>
        <Animated.View style={[styles.buttonStyle, {transform: [{scale}]}]}>
          <TouchableOpacity
            delayLongPress={2500}
            //Here is the trick
          activeOpacity={1}
          hitSlop={{top: 65, bottom: 65, left: 55, right: 55}}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
            
          <Text style={styles.buttonTextStyle}>PANIC</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 120,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cb4e4e',
      padding: 10,
      marginTop: 80,
      borderRadius: 100,
      shadowColor: 'red',
      shadowOpacity: 0.8,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
      
    },

    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '700'
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      paddingVertical: 16,
    },
  });