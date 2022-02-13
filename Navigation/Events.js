import React, { useEffect, useCallback } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { useForm } from 'react-hook-form';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

module.exports = () => {

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register('firstname');
    register('lastname');
    register('eventID');
    register('phonenumber');
  }, [register]);


  
    return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Register for an Event!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={onChangeField('firstname')}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={onChangeField('lastname')}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={onChangeField('phonenumber')}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Event ID"
        onChangeText={onChangeField('eventID')}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      marginTop: 120,
      padding: 30,
      flexDirection: "column",
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '50%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    textStyle: {
      textAlign: 'center',
      paddingVertical: 16,
      fontSize: 20,
      paddingLeft: 10,
      fontFamily: 'Avenir',
      fontWeight: '600',
      color:'#9b2226',
    },
});