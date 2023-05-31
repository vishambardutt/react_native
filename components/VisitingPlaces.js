import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Screen } from 'react-native-screens'

const VisitingPlaces = () => {
  return (
    <View>
      <Text style={styles.headingtext}>Visiting Places</Text>
      <View style={[styles.card,styles.cardEle]}>
      


<Image source={{uri: 'assets:/parmarth-niketan.jpg'}}
       style={{width: 40, height: 140}} />
      
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Permarth Niketan  fff</Text>
          <Text style={styles.cardLabel}>Rishikesh</Text>
          <Text style={styles.cardDesc}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...</Text>
          <Text style={styles.cardFooter}>9 Min form RamJhoola,Rishikesh</Text>
          </View>
      </View>
      

     
    </View>
  )
}

export default VisitingPlaces

const styles = StyleSheet.create({
  vimages:{
    height:100,
    width:350,
   marginBottom:6,
  },

  headingtext:{
    fontSize:16,
    color:'#22A39F',
    padding:3,
      
  },
  card:{
    width:380,
    height:200,
    borderRadius:4,
    margin:10,
    // marginVertical:15,
  },
  cardEle:{backgroundColor:'#fff',color:'#000000'},
  cardTitle:{fontSize:14,fontWeight:'bold',padding:3,},
  cardBody:{flex:1,
    flexGrow:1,
    paddingHorizontal:10,
  },
  cardDesc:{
    color:'#000000',
    fontSize:15,
    padding:3,
    textAlign:'justify',
    marginTop:8,
  },
  cardFooter:{
    fontSize:14,fontWeight:'normal',padding:3,
    color:'#22A39F',
  },
  cardLabel:{
  fontSize:16,
  color:'#22A39F',
  paddingHorizontal:6,padding:3,
},


})