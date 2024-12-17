import { Italic } from 'lucide-react';
import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';
import CustomCheckBox from '../customCheckBox';
import api, {fetchLogin, fetchPosts} from '../api/restApi';
export default function FormComponent({ state, navigation }) {
  console.log('state nya adalah: ', state);

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [reg, setReg] = useState('')
  const [loading, setLoading] = useState('')
  const [errorFetch, setErrorFetch] = useState(null);

  // const validate =({email, password}) => {
  //   const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //   if (!validEmail){
  //       setError({
  //           messagePasswordError: 'Password kurang dari 7'
  //       })

  //       return false;
  //   } 
  // }

  const post = async () =>{
    let postData = {
      full_name: fullname,
      email: email,
      password: password,
    }

    if (!fullname || !email || !password){
      Alert.alert('Validation Error', 'fullname, email, and password cannot be empty!')
    }
    else{
      console.log(postData)
      setLoading(true)
      try{
        const newPost = await fetchPosts(postData)
        Alert.alert('Success')
        navigation.navigate('Login2')
      } catch (error){
        setErrorFetch(error)
        Alert.alert(errorFetch.toString())
      }    
    }
    
  }

  const login = async () => {
    const {login: setLoginState} = useAuth();

    let postData = {
      email: email,
      password: password
    }

    if (!email || !password){
      Alert.alert('Validation Error', 'fullname, email, and password cannot be empty!')
    }
    else{
      console.log(postData)
      setLoading(true)
      try{
        const newPost = await fetchLogin(postData)
        Alert.alert('Success')
        navigation.navigate('Home')
      } catch (error){
        setErrorFetch(error)
        Alert.alert(errorFetch.toString())
      }    
    }
    
  }

  const validateEmail = () =>{
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail){
        setError('Email Tidak Valid')
    } else{
        setError('')
    }
  }

  const validatePassword = () =>{
    if (password.length < 7){
        setErrorPassword('Password kurang dari 7')
    } else{
        setErrorPassword('')
    }
  }

  return (
    <SafeAreaView>
        {state === 'register' &&
            <>
                <TextInput
                    style={styles.input}
                    placeholder="Fullname"
                    value={fullname}
                    onChangeText={setFullName}
                    />
            </>
        }

        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => {setEmail(text); validateEmail(text)}}
        />
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {setPassword(text); validatePassword(text)}}
        />
        {errorPassword !== '' && <Text style={styles.errorText}>{errorPassword}</Text>}
        
        
        {state === 'register' &&
            <>
                <TextInput
                    style={styles.input}
                    placeholder="Avatar Url"
                    value={avatarUrl}
                    onChangeText={setAvatarUrl}
                />

                <CustomCheckBox
                  label="I have read and agree to the"
                  value={isChecked}
                  onValueChange={(newValue) => setIsChecked(newValue)}
                  navigation={navigation}
                />
          
                <TouchableOpacity
                  style={[
                    styles.button,
                    { backgroundColor: isChecked ? '#007B7F' : '#ccc' },
                  ]}
                  disabled={!isChecked}
                  onPress = {() => post()}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
          
                {/* Link Login */}
                <Text style={styles.loginText}>
                  Have an account?{' '}
                  <Text style={styles.linkText} onPress = {() => navigation.navigate('Login2')}>Login here</Text>
                </Text>
            </>
        }

        {state === 'login' &&
          <>
          <TouchableOpacity style={styles.button} onPress={() => {
            login()
            navigation.navigate('TabNavigator')}}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
                {/* Link Login */}
                <Text style={styles.loginText}>
                  Don't have account?{' '}
                  <Text style={styles.linkText} onPress={() => navigation.navigate('Register2')}>Register here</Text>
                </Text>
          </>
        }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
    fontStyle: 'italic'
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
