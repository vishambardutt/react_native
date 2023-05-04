import React from 'react'
import { Text,View } from 'react-native'

const User = (props) => {
  return (
    <View>
      <Text>It is  User Component</Text>
      <Text style={{fontSize:25,textAlign:'center',}}>{props.name}</Text>
      <Text style={{fontSize:25,textAlign:'center',}}>{props.profession}</Text> 
     
      </View>
  )
}

export default User