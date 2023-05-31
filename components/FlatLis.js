import React,{useState,useEffect} from 'react'
import {View,Text, FlatList} from 'react-native'

const FlatLis = () => {
      const [data,setData] = useState()
const getAPIdata = async () => {
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        const response = await fetch(url);
        const result = await response.json();
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
      <Text>FlatList</Text>
      {
          data &&  data.length ?
            <FlatList data={data} renderItem={({item})=>
            <View>
              <Text>Id: {item.id}</Text>
              {/* <Text>{item.userId}</Text> */}
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.body}</Text>
              </View>}/>: <Text>No data available</Text>
      }
      </View>
     
  )
}

export default FlatLis