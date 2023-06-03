import React, { useState } from 'react';
// import { ActivityIndicator } from 'react-native';
// import type { PropsWithChildren } from 'react';

import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ColorSchemeName

} from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutMe from './components/AboutMe';
import LoginScreen from './components/LoginScreen';
import SignInScreen from './components/SignInScreen';
import FlatCards from './components/FlatCards';
import Apidata from './components/Apidata';
import Layout from './components/Layout';
// import Profile from './components/Profile';

import TabNavigation from './components/TabNavigation';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
// const ColorSchemeName = DarkTheme
let Home = () => {
  
  return (
    
    <NavigationContainer>
    {/* <Tab.Navigator>
    <Tab.Screen name="Sign In" component={SignInScreen} />
    <Tab.Screen name="ABOUT" component={AboutMe} />
    <Tab.Screen name="API" component={Apidata} />
    <Tab.Screen name="CARDS" component={FlatCards} />
  </Tab.Navigator> */}
  <TabNavigation/>
   {/* <Profile/> */}
  
  </NavigationContainer>
 
  )
  
   



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Button: {
    borderRadius: 20,

  },
  ctext: {
    color: Platform.OS == 'android' ? '#008080' : '#00FFFF',
    fontSize: 15,
  }
});
}

export default Home;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');


