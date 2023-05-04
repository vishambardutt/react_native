import React from 'react'
import { FlatList,View,Text } from 'react-native';
import External from '../External';

const UserList = () => {
      const users =[
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
      <Text style={External.heading}>User Flatlist</Text>
      <FlatList 
       data={users}
       renderItem={({item})=><Text style={External.ntext}>{item.name}</Text>} keyExtractor={item=>{item.id}}/>
    </View>
  )
}

export default UserList;