import React from 'react'
import External from '../External';
import { View, Text,FlatList } from 'react-native';

export const Flist = () => {
      const user =[
            {
                  id:1,
                  name:'Kavita',
                  email:'kavita@gmail.com',
                  occupation:'react native developer'
            },
            {
                  id:2,
                  name:'Vartika',
                  email:'vartika@gmail.com',
                  occupation:'react js developer'
            },
            {
                  id:3,
                  name:'Yutika',
                  email:'yutika@gmail.com',
                  occupation:'software enginer'
            },
            {
                  id:4,
                  name:'Ravi',
                  email:'ravi@gmail.com',
                  occupation:'Nextjs Developer'
            },
      ];
  return (
    <View >
      <Text style={External.heading}>Component with Flat List</Text>
      <FlatList 
      data={user}
      keyExtractor={(item, index) => item.id}
      renderItem={({item})=> <UserData item={item} />}
      
       />
    </View>
  )
}
export const UserData = (props)=>{
      const item = props.item 
      return (
            <View  style={External.flexcontainer}>

      <Text style={External.flextext} >{item.name}</Text> 
      <Text style={External.flextext} > {item.email}</Text>
      </View>

      )
}
export default Flist;