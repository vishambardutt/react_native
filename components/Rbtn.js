import React,{useState} from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';

const Rbtn = () => {
      const [selectedRadio, setSelectedRadio] = useState(2);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
            <View style={styles.radiowrapper}>
            <View style={styles.radiobtn}>
                 {
                 selectedRadio === 1? <View style={styles.rbg}></View>:null

                 } 
            </View>
      <View><Text style={styles.radiotxt}>Radio 1</Text></View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
            <View style={styles.radiowrapper}>
            <View style={styles.radiobtn}>
            {
                 selectedRadio === 2? <View style={styles.rbg}></View>:null

                 } 
            </View>
          
      <View><Text style={styles.radiotxt}>Radio 2</Text></View>
      </View>
      </TouchableOpacity>
      
      </View>
  )
}

export default Rbtn;

const styles=StyleSheet.create({
main:{
      flex:1,
      // textAlignVertical:'center',
      alignItems:'center',
      justifyContent:'center'
},
radiotxt:{
      fontSize:20,

},
radiobtn:{
      height:40,
      width:40,
      borderWidth:3,
      borderColor:'#ddd',
      borderRadius:20,
       margin:13,

},
radiowrapper:{
      flexDirection:'row',
      alignItems:'center',
},
rbg:{
      backgroundColor:'#ddd',
      height:25,
      width:25,
      borderRadius:15,
      margin:4
}

})