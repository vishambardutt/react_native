import React,{useState} from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';

const Rbtn = () => {
      const skills = [
            {
                  id:1,
                  name:'CSS'
            },
            {
                  id:2,
                  name:'HTML'
            },
            {
                  id:3,
                  name:'NEXT'
            },
            {
                  id:4,
                  name:'NODE'
            },
            {
                  id:5,
                  name:'C++'
            },
      ]
      const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>{
      skills.map((item,index)=>
            <TouchableOpacity
            key={index}
            onPress={()=>setSelectedRadio(item.id)}>
            <View style={styles.radiowrapper}>
            <View style={styles.radiobtn}>
                 {
                 selectedRadio == item.id? <View style={styles.rbg}></View>:null

                 } 
            </View>
      <View><Text style={styles.radiotxt}>{item.name}</Text></View>
      </View>
      </TouchableOpacity>

      )
    }
      

      
      
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