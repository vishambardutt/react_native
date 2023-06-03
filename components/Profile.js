import React from 'react'
import {View,Text, StyleSheet,Image,StatusBar,} from 'react-native'
const PlaceholderImage = require('../assets/bottom-img.png');
const Profile = () => {
  return (
     
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
       
      </View>
      <StatusBar style="auto" />
    </View>
   

  )
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F8E8EE',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 58,
      },
      image: {
        width: 278,
        height: 160,
        borderRadius: 18,
      },
    });
export default Profile