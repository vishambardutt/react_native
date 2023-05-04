import React,{useState,useEffect} from 'react';
import Child from './Child';
import {View,Text,Button, Title} from 'react-native';

const Parents = () => {
      const [count, setCount] = useState(0);
      const [data,setData] = useState(10);
      return (
            <View>
                  <Title> {data }use Effect componentdidMount{ count}</Title>
                  
                  
                  <Button title='count' onPress={()=>setCount(count+1)}/>
                  <Button title='Data' onPress={()=>setData(data+1)}/>
                  <Child info={{data,count}} />
            </View>
      )
}

export default Parents