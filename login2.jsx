import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity, Image
} from 'react-native';
import FormComponent from './component/Form';


export default function LoginScreen2({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')}/>
      </View>

    <FormComponent state={'login'}/>

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
      {/* Link Login */}
      <Text style={styles.loginText}>
        Don't have account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Register2')}>Register here</Text>
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
