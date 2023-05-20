import React from 'react'
import {View, Text,Button, Touchable,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{fontSize:15,alignContent:'center',textAlign:'center',margin:8,color:'#05BFDB',textTransform:'uppercase',textAlignVertical:'center'}}>
        Welcome to My App</Text>
        
        
    </View>
  )
}

export default Main