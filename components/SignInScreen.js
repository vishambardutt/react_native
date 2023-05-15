import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Button } from 'react-native';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in all fields');
    } else {
      // Add your sign-in logic here
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Button
  title="Go to Login"
  onPress={() => {props.navigation.navigate('LoginScreen');
  }}
/>
    </View>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
};

export default SignInScreen;
