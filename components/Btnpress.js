import React,{useState} from 'react'
import {View,Pressable,Text, StyleSheet,StatusBar, Button} from 'react-native';
      
const Btnpress = () => {
      const [hide,setHide]= useState(false)
      const [barStyle,setBarstyle]=useState('default');
  return (
    <View style={styles.main}>
      <Pressable
       onPress={()=>console.warn('long pressed')
      }
      onLongPress={()=>{console.warn('Long Press')}}
      onPressIn={()=>{console.warn('On Press In')}}
      onPressOut={()=>{console.warn('On Press Out')}} >
    <Text style={styles.pbtn}>I'm pressable!</Text>
  </Pressable>
  <StatusBar backgroundColor={'#800080'}
  barStyle={barStyle}
  hidden={hide}/>
 
      <Button title="Toggle " onPress={()=>setHide(!hide)}/>
  
 <Button title='Update Style' onPress={()=>setBarstyle('dark-content')}/>
 
  
  </View>
  )
}

const styles =StyleSheet.create({
main:{
      flex:1,
      fontSize:20,
      justifyContent:'center',
      alignItems:'center',
},
pbtn:{
     backgroundColor:'#DE3163',
     color:'#fff',
     borderRadius:20,
     margin:10,
     padding:10,
     textAlign:'center',
     shadowColor:'#d8d8d8',
     fontSize:20,
}
})
export default Btnpress;