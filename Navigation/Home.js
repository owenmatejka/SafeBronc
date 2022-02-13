import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

module.exports = () => {
    return (
        <View style={styles.container}>
    
          <View style={styles.titleContainer}>
            <Text style={styles.title}>SafeBronc</Text>
            <StatusBar style="auto" />
          </View>

          <View style={styles.bodyContainer}>
            <ScrollView>
            <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.bodyText}>See below for a guide to our features!{"\n"}</Text>
                </View>
              </View>

              <Text style={styles.rTitle}> Resources:</Text>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.bodyText}>List of campus resources with contacts 
                  including emails and phone numbers if you need help!{"\n"}</Text>
                </View>
              </View>
    
              <Text style={styles.rTitle}> Panic:</Text>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.bodyText}>Want to alert everyone of a creeper?
                  Use this function to send a text to all registered
                  individuals at an event!{"\n"}</Text>
                </View>
              </View>
                <Text style={styles.rTitle}> Events:</Text>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.bodyText}>Register for an event here!{"\n"}</Text>
                </View>                      
              </View>
            </ScrollView>
          </View >
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
    titleContainer: {
      flex: 0.1,
      paddingLeft: 20,
      marginTop: 25,
      width: "100%",
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 0.9,
      paddingTop: 60,
      paddingLeft: 10,
      width: "100%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
    },
    rContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 10,
      alignItems: 'center',
    },
    rTitle: {
      fontSize: 25,
      fontWeight: '700',
      fontFamily: 'Avenir',
      color:'#9b2226',
    },
    title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Avenir',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    bodyText: {
      fontSize: 20,
      paddingLeft: 10,
      fontFamily: 'Avenir',
      fontWeight: '600',
    },
  })