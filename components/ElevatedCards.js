import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards=()=> {
  return (
    <View>
      <Text style={styles.headText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.constainer}>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
            <View style={[styles.card,styles.cardEle]}><Text style={styles.cardText}>Card</Text></View>
      </ScrollView>

    </View>
  )
}
export default ElevatedCards;
const styles = StyleSheet.create({
      headText:{
     
            fontSize:15,
            padding:3,
            color:'#434242'
      },
      constainer:{
            flex:1,
            flexDirection:'row',
            padding:5,
            height:100,

      },
      cardText:{
            color:'#ffffff',
          },
      card:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            margin:5,
            width:80,
            height:80,
            borderRadius:6,

      },
      cardEle:{
            backgroundColor:'#FF55BB',
            padding:5,
            margin:5,
           
      },

})


