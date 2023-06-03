import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Profile from './Profile';
import Footer from './Footer';
const Layout = () => {
  return (
   <View >
    <Footer/>
    <Profile/>
   
   </View>
   
  )
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 58,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });
export default Layout