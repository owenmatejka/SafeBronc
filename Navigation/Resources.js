import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import * as React from  'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

module.exports = () => {
    return (
        <View style={styles.container}>
    
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Resources:</Text>
            <StatusBar style="auto" />
          </View>
    
          {/* Contact Info */}
          <View style={styles.resourcesContainer}>
            <ScrollView>
              {/* Campus Resources Contact */}
              <Text style={styles.rTitle}> Campus Resources:</Text>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Main Office</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+14085544441'); }}>(408)-554-4441</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Emergency</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+14085544444'); }}>(408)-554-4444</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Email</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('mailto:campussafety@scu.edu'); }}>campussafety@scu.edu</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Safe Walk</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+14085544410'); }}>(408)-554-4410</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Santa Clara Police Department</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+14086154700'); }}>(408)-615-4700</Text>
                </View>
              </View>
    
              {/* Sorority Presidents Contact */}
              <Text style={styles.rTitle}> Sorority Presidents:</Text>
              <View style={styles.rContainer}>
                <Image source={require("../assets/theta.png")} style={styles.pIcon}></Image>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Theta - Katie Hassett</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+16025252382'); }}>(602)-525-2382</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <Image source={require("../assets/kappa.png")} style={styles.pIcon}></Image>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Kappa - Luisa Southworth</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+16193007948'); }}>(619)-300-7948</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <Image source={require("../assets/dGamma.jpg")} style={styles.pIcon}></Image>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Delta Gamma - Cat Le</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+14087690729'); }}>(408)-769-0729</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <Image source={require("../assets/aPhi.png")} style={styles.pIcon}></Image>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Alpha Phi - Sallyanne Tejan</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+12145323462'); }}>(214)-532-3462</Text>
                </View>
              </View>
              <View style={styles.rContainer}>
                <Image source={require("../assets/adpi.png")} style={styles.pIconA}></Image>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.pTitle}>Alpha Delta Pi - Sarah Sporn</Text>
                  <Text style={styles.pNumber} onPress={() => { Linking.openURL('tel:+17148125201'); }}>(714)-812-5201</Text>
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
    resourcesContainer: {
      flex: 0.9,
      paddingTop: 60,
      paddingLeft: 10,
      width: "100%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
  
      shadowColor: '#9b2226',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
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
      fontFamily: 'Avenir'
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
    pIcon: {
      width: 50,
      height: 50,
    },
    pIconA: {
      width: 50,
      height: 50,
      borderRadius: 70,
    },
    pTitle: {
      fontSize: 20,
      paddingLeft: 10,
      fontFamily: 'Avenir',
      fontWeight: '600',
    },
    pNumber: {
      fontSize: 15,
      paddingLeft: 10,
      fontFamily: 'Avenir',
      color: '#9b2226',
    },
  })