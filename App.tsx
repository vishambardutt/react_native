import React, { useState } from 'react';
// import { ActivityIndicator } from 'react-native';
// import type { PropsWithChildren } from 'react';

import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ColorSchemeName

} from 'react-native';
// import Counting from './components/Counting';
// import Rbtn from './components/Rbtn';
// import Checkb from './components/Checkb';
// import Modelbox from './components/Modelbox';
// import Child from './components/Child';
// import Parents from './components/Parents';
// import External from './External';
// import Btn from './components/Button';
// import User from './components/User'
// import UserLogin from './components/UserLogin';
// import Login from './components/Login';
// import UserList from './components/UserList';
// import Listmp from './components/Listmap';
// import Dgrid from './components/Dgrid';
// import Flist from './components/Flist';
// import Slist from './components/Slist';
// import Teacher from './components/Teacher';
// import Btnpress from './components/Btnpress';
// import{WebView} from 'react-native-webview'
// import PasscodeScreen from './screens/PasscodeScreen';
// import ScreenLock from './screens/PasscodeScreen';
// import Form from './components/Form';

// import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import LoginScreen from './components/LoginScreen';
// import SignInScreen from './components/SignInScreen';
// import RegistrationScreen from './components/RegistrationScreen';
import Main from './components/Main';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DataList from './components/DataList';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import VisitingPlaces from './components/VisitingPlaces';
import Apidata from './components/Apidata';
import FlatLis from './components/FlatLis';
// import Flist from './components/Flist';

// const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();
// const ColorSchemeName = DarkTheme
let Home = () => {
  // const [show, setShow] = useState(false);
  // const btn =()=>{
  //   console.warn('Home Button Clicked')
  // }

  // const displayLoader = () => {
  //   setShow(true);
  // }
  // setTimeout(() => {
  //   setShow(false)
  // }, 3000);

  // let [name, setName] = useState('Vishambar');
  // let pressBtn = () => {
  //   console.warn('Press, Button Pressed')
  // }
  // let btnVal = (val: any) => {
  //   console.warn(val)
  // }
  // let onPressLearnMore = () => {
  //   console.warn('Learn More')
  // }
  // function checkName() {
  //   setName('Vartika');
  // }
  return (
  //   <NavigationContainer>
  //   <Tab.Navigator>
  //   <Tab.Screen name="Sign In" component={SignInScreen} />
  //   <Tab.Screen name="Login" component={LoginScreen} />
  //   <Tab.Screen name="Registration" component={RegistrationScreen} />
  //   <Tab.Screen name="API" component={DataList} />
  // </Tab.Navigator>
  // </NavigationContainer>
 
  <ScrollView>
   <FlatCards />
  <ElevatedCards/>
  
  <VisitingPlaces /> 
  <DataList/>
 <Apidata/>
<FlatLis/>
  </ScrollView>

 
 
  
  )
  
   {/* <NavigationContainer>
       <Stack.Navigator screenOptions={{headerStyle: {
              backgroundColor: '#FFD966',
             
            },
            headerTitleStyle:{
              fontSize:15,
              fontFamily:'raleway',
                          
            },
            headerTintColor:'#1A5F7A',
        
      }}>
         <Stack.Screen name='Login' component={LoginScreen} options={{
            headerTitle:()=><Button title='Signin'/>,
            // headerRight:()=><Button  onPress={btn}title='Home'/>,
            headerRight:()=><Header/>,
            // <Button title='Rewards'/>,
            title: 'My Home', headerStyle: {
              backgroundColor: '#FFD966',
             
            },
            headerTitleStyle:{
              fontSize:15,
              fontFamily:'raleway',
                          
            },
            headerTintColor:'#1A5F7A',
            
            
          }} />
        <Stack.Screen name='Home' component={Main}
          options={{
           
            title: 'My Home', headerStyle: {
              backgroundColor: '#FFD966',
             
            },
            headerTitleStyle:{
              fontSize:15,
              fontFamily:'raleway',
                          
            },
            headerTintColor:'#1A5F7A',
            
            
          }} />
       
        <Stack.Screen name='Signin' component={SignInScreen} />
        
   </Stack.Navigator> 
   

    </NavigationContainer>*/}
    
    

    //   <View>
    //     {/* <WebView source ={{uri:'https:https://reactnative.dev/'}} /> */}
    //     {/* check os */}
    // {/* <Text>Platform: {Platform.OS}</Text>
    // {
    //   Platform.OS =='android'?
    //   <View style={{backgroundColor:'#808080', height:80,width:80,}}></View>:
    //   <View style={{backgroundColor:'#800000', height:80,width:80,}}></View>
    // } */}
    // {/* <Text style={styles.ctext}>Text Styles Conditonaly</Text>  */}
    // {/* Check to react native version */}
    //  {/* <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text> */}

    //     {/* <Teacher /> */}
    //     {/* <Slist/> */}
    //     {/* <Flist /> */}


    //     {/* <Dgrid/> */}

    //     {/* <Listmp /> */}
    //     {/* <Form/> */}

    //     {/* <UserList /> */}
    //    {/* <ScreenLock /> */}
    //     <ScrollView>
    //       <PasscodeScreen/>
    //     {/* <Btnpress/>
    //     <Modelbox/> */}
        //  <ActivityIndicator size={100} color="golden" animating={show} />
        // <Button title="Show Loader" onPress={displayLoader} /> 
    //       {/* <Parents /> */}
    //       {/* <Child /> */}
    //       <Checkb />
    //       <Rbtn />
    //       <Counting />

    //       <UserLogin />
    //       <Button
    //         onPress={onPressLearnMore}
    //         title="Learn More"
    //         color="#841584"

    //         accessibilityLabel="Learn more about this purple button"
    //       />
    //       <Button title='Check Name' onPress={checkName}></Button>
    //       <Text style={[External.textN, styles.sectionTitle]} >This is First Android App</Text>
    //       {/* <Btn /> */}
    //       {/* <User  name={'React Native Tutorials from props'} profession={'Reactjs Developer'} /> */}
    //     </ScrollView>
    //   </View>

  // );
// }
// const Header =()=>{
//   return(
//     <View>
//       <TextInput placeholder='you text here' style={{borderWidth:1, borderRadius:10,borderColor:'#ffccff'}}/>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Button: {
    borderRadius: 20,

  },
  ctext: {
    color: Platform.OS == 'android' ? '#008080' : '#00FFFF',
    fontSize: 15,
  }
});
}

export default Home;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');


