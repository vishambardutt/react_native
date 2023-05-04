import React from 'react'
import External from '../External';
import { View,Text } from 'react-native';
const Listmp = () => {
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
      <Text style={External.heading}>Using Map List</Text>
      <View>
      {
            
            user.map((item)=><Text key={item.id} style={External.textl}>{item.name}</Text>)
            
     }
      </View>
      
     
    
    </View>
  )
  
}

    
export default Listmp