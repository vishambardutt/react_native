 import React from 'react'
import { Text,View, Button, TextInput } from 'react-native'
 class Student extends React.Component {
      constructor(){
            super();
            this.state={
                  name:'Vishambar',
                  age:42,
            }
      }

      setName=(val)=>{
            // this.setState({name:'Jakhmola'});
            this.setState({name:val});
      }

      clickMe =()=>{
            console.warn('button clicked')
      }
     
      render (){

            console.log (this.props)
           
            
 
            return(
                  <View>
                        <Text style={{fontSize:30,color:'#ffccdd'}}>Sample example of class {this.state.name} {this.state.age}</Text>
                        <TextInput style={{borderColor:'#000000',borderWidth:2,padding:10,margin:10,borderRadius:20}} placeholder='Put you text here'onChangeText={(text)=>this.setName(text)}/>
                        <Button title='Press me' onPress={this.clickMe}/>
                        <Button title='Change State' onPress={this.clickMe}/>
                  </View>
            )
      }
 }
 export default Student;