import React from 'react'
import {SectionList, Text,View } from 'react-native'
import External from '../External';

 const Slist = () => {
      const users =[
            {
                  id:1,
                  name:'Kavita',
                  email:'kavita@gmail.com',
                  skills:['python', 'es 6', 'react native']
            },
            {
                  id:2,
                  name:'Vartika',
                  email:'vartika@gmail.com',
                  skills:['react', 'redux', 'node']
            },
            {
                  id:3,
                  name:'Yutika',
                  email:'yutika@gmail.com',
                  skills:['css', 'boostrap', 'html']
            },
            {
                  id:4,
                  name:'Ravi',
                  email:'ravi@gmail.com',
                  skills:['javascript', 'larabel', 'nextjs']
            }, 
      ];
  return (
    <View>
      <Text style={External.heading}>Section List</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text >{item}</Text>}
      renderSectionHeader = {({section:{name}})=>(
       <Text>{name}</Text>
       )}
       />
      </View>
  )
}
export default Slist
