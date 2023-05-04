import React, { useEffect,useState } from 'react';
import { View,Text } from 'react-native';

const Child = (props) => {
      console.warn(props.info);
      useEffect(()=>{
            console.warn('run this when data run')
      },[props.info.data])

      // useEffect(()=>{
      //       console.warn('run this when count run')
      // },[count])
      return (
            <View>
                  <Title>This is Count Props count: {props.info.count}</Title>
                  <Title>This is Data Props data:{props.info.data }</Title>
                  
                  <Button title='count' onPress={()=>setCount(count+1)}/>
                  <Button title='Data' onPress={()=>setdata(data+1)}/>
            </View>
      )
}

export default Child;