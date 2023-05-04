import React from 'react'
import { View,Text } from 'react-native'
import External from '../External'

const Dgrid = () => {
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
    {
      id:4,
      name:'Ravi',
      email:'ravi@gmail.com',
      occupation:'Nextjs Developer'
},
{
  id:4,
  name:'Ravi',
  email:'ravi@gmail.com',
  occupation:'Nextjs Developer'
},
];
  return (
    <View>
      <Text style={External.heading}>Grid System</Text>
     <View  style={External.container}>
      {
        users.map((item)=><Text style={External.fbox}>{item.name}</Text>)
      }
      </View>
      </View>
  )
}

export default Dgrid