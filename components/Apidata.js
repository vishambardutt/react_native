import React, { useEffect,useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Apidata = () => {
const [data,setData] = useState()
const getAPIdata = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching API data:', error);
        // Perform error handling logic here
      }
    };
     
useEffect (()=>{
      getAPIdata()
},[])
return (
      <View>
        <Text style={styles.headtext}>APP DATA FORM API</Text>
        {
         data && data.length ?
          data.map((item) =>
            <View style={styles.datalign}>
              <Text style={styles.itit}>ID: {item.id}</Text>
              <Text style={styles.normalt}>UserId: {item.userId}</Text>
              <Text style={styles.normalt}>Title: {item.title}</Text>
              <Text style={styles.dbg}>Description: {item.body}</Text>
            </View>
          ) : null
        }
      </View>
    )
    
}




const styles = StyleSheet.create({
headtext:{
      fontSize:20,
      textAlign:'center',
      
},
datalign:{
      padding:10,
      borderBottomWidth:2,
      borderBottomColor:'#ffccff',
      
},
normalt:{
      fontSize:18,
},
itit:{
      backgroundColor:'#F2BED1',
      fontSize:18,
      color:'#27374D',

},
dbg:{
      marginTop:8,
      fontSize:18,

}
})
export default Apidata