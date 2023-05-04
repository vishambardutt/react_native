import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import External from '../External'

const Counting = () => {
      const [count, setCount] = useState(0)
      const [data, setData] = useState(10)
      // useEffect(() => {
      //       console.warn('count is working')
      // }, [count])
      // useEffect(() => {
      //       console.warn('data is working')
      // }, [data])
      return (
            <View>
                  <Text style={External.heading}>{data}Lifecycle with Use Effect Hook {count}</Text>
                  <View style={style.btn} >
                        <Button title="Update Count" onPress={() => setCount(count + 1)} />
                  </View>
                  <View style={style.btn}>
                        <Button title="Update Data" onPress={() => setData(data + 5)} />
                        <ChildCount info={{data,count}} />
                  </View>



            </View>
      )
}
const ChildCount =(props)=>{

      useEffect(()=>{
            console.warn('data props run')
      },[props.info.data])

      useEffect(()=>{
            console.warn('count props run')
      },[props.info.count])


      return (
            <View>
                  <Text>Data:{props.info.data}</Text>
                  <Text>Count:{props.info.count}</Text>
            </View>
      )
}
export default Counting

const style = StyleSheet.create({
      btn: {
            margin: 10,
      }
});