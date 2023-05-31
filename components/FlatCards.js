import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FlatCards = () => {
  return (
    <View >
      <Text style={styles.headText}>Flat Cards</Text>
      <View style={styles.container}>
       <View style={[styles.card,styles.cardOne]}>
       <Text style={styles.textcolor}>Green</Text>    
      </View>
      <View style={[styles.card,styles.cardTwo]}>
       <Text style={styles.textcolor}>Orange</Text>    
      </View>
      <View style={[styles.card,styles.cardThree]}>
       <Text style={styles.textcolor}>Blue</Text>    
      </View>
      <View style={[styles.card,styles.cardFour]}>
       <Text style={styles.textcolor}>Red</Text>    
      </View>
      {/* <View style={[styles.card,styles.cardFive]}>
       <Text style={styles.textcolor}>yellow</Text>    
      </View> */}
      </View>
      
    </View>
   
  )
}



const styles = StyleSheet.create({
  textcolor:{
    color:'#ffffff',
  },
headText:{
     
      fontSize:15,
      padding:3,
      color:'#434242'
},
container:{flex:1,
  flexDirection:'row', 
  flexWrap:'wrap',    

},
card:{
     margin:10,
      height:90,
      width:90,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      color:'#ffffff',
      borderRadius:3,
},
cardOne:{
      backgroundColor:'#FFB84C',
},
cardTwo:{
  backgroundColor:'#F266AB',
},
cardThree:{
  backgroundColor:'#A459D1',
},
cardFour:{
  backgroundColor:'#2CD3E1',
},
cardFive:{
  backgroundColor:'#EB455F',
},
})
export default FlatCards