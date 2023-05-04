import React,{useState} from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import External from '../External'

const Login = () => {
      let [name,setName] = useState('gggg')
  return (
    <View style={{marginBottom:10,}}>
      <Text style={External.text}>Your name is: {name}</Text>
      <TextInput style={External.textInput} value={name} placeholder='Put Your Name'onChangeText={(text)=>setName(text)}/>
      <Button style={External.btn} title='CLEAR' onPress={()=>setName('')}/>
      </View>
  )
}

export default Login