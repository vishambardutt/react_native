import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import * as Keychain from 'react-native-keychain';

const PasscodeScreen = () => {
  const [passcode, setPasscode] = useState('');
  
  const handlePasscodeChange = (value) => {
    setPasscode(value);
  };

  const handleLoginPress = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.password === passcode) {
      console.log('Login success');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter passcode</Text>
      <View style={styles.passcodeContainer}>
        <NumericInput
          value={passcode}
          onChange={handlePasscodeChange}
          type='custom'
          valueType='integer'
          maxLength={4}
          minValue={0}
          maxValue={9}
          initValue={0}
          containerStyle={styles.passcodeInput}
          inputStyle={styles.passcodeInputText}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passcodeContainer: {
    flexDirection: 'row',
  },
  passcodeInput: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
  },
  passcodeInputText: {
    fontSize: 24,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasscodeScreen;
