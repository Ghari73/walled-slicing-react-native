import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity, Image
} from 'react-native';
import CustomCheckBox from './customCheckBox';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RegisterScreen() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')}/>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
      />

      {/* Terms and Conditions */}
      <CustomCheckBox
        label="I have read and agree to the Terms and Conditions"
        value={isChecked}
        onValueChange={(newValue) => setIsChecked(newValue)}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isChecked ? '#007B7F' : '#ccc' },
        ]}
        disabled={!isChecked}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Link Login */}
      <Text style={styles.loginText}>
        Have an account?{' '}
        <Text style={styles.linkText}>Login here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F9FAFB',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    fontSize: 50,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    flexWrap: 'wrap',
  },
  linkText: {
    color: '#008080',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#008080',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
});
