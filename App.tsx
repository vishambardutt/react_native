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
  
} from 'react-native';
import Counting from './components/Counting';
import Rbtn from './components/Rbtn';
import Checkb from './components/Checkb';
import Modelbox from './components/Modelbox';
// import Child from './components/Child';
// import Parents from './components/Parents';
import External from './External';
import Btn from './components/Button';
import User from './components/User'
import UserLogin from './components/UserLogin';
import Login from './components/Login';
import UserList from './components/UserList';
import Listmp from './components/Listmap';
import Dgrid from './components/Dgrid';
import Flist from './components/Flist';
import Slist from './components/Slist';
import Teacher from './components/Teacher';
import Btnpress from './components/Btnpress';
// import Form from './components/Form';




let Home = () => {
  const [show, setShow] = useState(false);

  const displayLoader= () => {
    setShow(true);
  }
  setTimeout(() => {
    setShow(false)
  }, 3000);

let [name, setName] = useState('Vishambar');
let pressBtn = () => {
  console.warn('Press, Button Pressed')
}
let btnVal = (val: any) => {
  console.warn(val)
}
let onPressLearnMore = () => {
  console.warn('Learn More')
}
function checkName() {
  setName('Vartika');
}
return (
  <View>

    {/* <Teacher /> */}
    {/* <Slist/> */}
    {/* <Flist /> */}


    {/* <Dgrid/> */}

    {/* <Listmp /> */}
    {/* <Form/> */}

    <UserList />
   
    <ScrollView>
    <Btnpress/>
    <Modelbox/>
    <ActivityIndicator size={100} color="golden" animating={show} />
    <Button title="Show Loader" onPress={displayLoader} />
      {/* <Parents /> */}
      {/* <Child /> */}
      <Checkb />
      <Rbtn />
      <Counting />

      <UserLogin />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"

        accessibilityLabel="Learn more about this purple button"
      />
      <Button title='Check Name' onPress={checkName}></Button>
      <Text style={[External.textN, styles.sectionTitle]} >This is First Android App</Text>
      {/* <Btn /> */}
      {/* <User  name={'React Native Tutorials from props'} profession={'Reactjs Developer'} /> */}
    </ScrollView>
  </View>

);
}

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
});

export default Home;

// function useState(arg0: string): [any, any] {
//   throw new Error('Function not implemented.');
// }

