import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
const AboutMe = () => {
  return (
    <View><Text style={styles.coname}>ABOUT ME</Text>
    <Text style={styles.abttext}>Skilled UI Developer adept at reducing the amount of work required of end users to navigate website, software. Sound experience at designing interfaces that create the best liaisons between user and application through functions that minimize reaching a goal. Extensive experience in Web Technologies, who enjoys being part of, as well as leading, a successful and productive team? Able to work well on his own initiative and can demonstrate the high level of motivation required to meet the heights of deadlines. Even under significant pressure, possesses a strong ability to perform effectively.

    Execute, and finalize projects according to strict deadlines and within budget.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
      headtext:{
            fontSize:20,
            color:'#000000',
            textAlign:'center',
            alignItems:'center',
            padding:10,
      },
      abttext:{
        fontSize:20,
            textAlign:'justify',
           
            padding:10,
            color:'#060930',
            fontWeight:500,
      },
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 58,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });
export default AboutMe