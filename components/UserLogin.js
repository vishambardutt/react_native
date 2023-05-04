import React, {useState} from 'react'
import { Button, TextInput,View,text,Text,email, } from 'react-native'
import External from '../External'

const UserLogin = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');
  let [item, setItem] = useState('');

  let clearFormData =() =>{
    setItem(false);
    setName('');
    setPassword('');
    setEmail('');

  }
  
  
  return (
    <View>
     
            <TextInput style={External.textInput}
            placeholder='User Id'
            onChangeText={(text)=>setName(text)} value={name}/>

            <TextInput style={External.textInput}
            placeholder='Enter Password' secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}  value={password}/>
            

            <TextInput style={External.textInput}
            placeholder='Email' 
            onChangeText={(text)=>setEmail(text)}  value={email}/>
            
           
            <View>
              {
                item ?
                <View>
                  <Text style={{fontSize:20,}}>User Name is:{name}</Text>
                  <Text style={{fontSize:20,}}>Email Name is:{email}</Text>
                  <Text style={{fontSize:20,}}>Password Name is:{password}</Text>
                  </View>
                  :null
              }
            </View>
            <View style={{borderRadius:10,padding:10,}} >
              <Button  title='Print'color='grey' onPress={()=>setItem(true)}/>
              </View>
            <View style={{borderRadius:10,padding:10,}} >
              <Button title='clear' color='brown'onPress={clearFormData}/>
            </View>


     
      </View>
  )
}

export default UserLogin

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
  };
};