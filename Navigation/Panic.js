import { Animated, StyleSheet, TouchableOpacity, Button, Alert, Text, View } from 'react-native';
import React, { useState, useCallback, useRef } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


module.exports = () => {

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: .5,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };




  const handlerLongClick = () => {
    //handler for Long Click
    Alert.alert("Send Out Creep Alert","Are you sure?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Yes", onPress: () => console.log("OK Pressed") } //Add backend event handler here
    ]);
  };





  return (
      <View style={styles.container}>
          <Text style={styles.textStyle}>
            See a Creeper? Press and Hold Button for 3 Seconds
          </Text>
        <Animated.View style={[styles.buttonStyle, {transform: [{scale}]}]}>
          <TouchableOpacity
            delayLongPress={2500}
            onLongPress={handlerLongClick}
            //Here is the trick
          style={styles.btn}
          activeOpacity={1}
          hitSlop={{top: 25, bottom: 25, left: 55, right: 55}}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          <Text style={styles.buttonTextStyle}>Panic Button</Text>
          </TouchableOpacity>
        </Animated.View>     
      </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: -80,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      width: 170,
      height: 170,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cb4e4e',
      padding: 10,
      marginTop: 20,
      borderRadius: 100,
      shadowColor: 'red',
      shadowOpacity: 0.8,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
    },
    btn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      paddingVertical: 16,
    },
  });