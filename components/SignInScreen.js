import React, { useEffect, useState } from 'react'
import{View,Text} from 'react-native'
const SignInScreen = () => {
  const [data,setData] = useState(undefined)
  let getData = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    setData(result)


  }
  useEffect(()=>{
    getData();


  },[])
  return (
    <View>
      <Text>API Data SignInScreen</Text>
      {
        data ? <View>
        <Text>{data.id}</Text>
        <Text>{data.userId}</Text>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
        </View>:null
      }
       </View>
 )
}

export default SignInScreen