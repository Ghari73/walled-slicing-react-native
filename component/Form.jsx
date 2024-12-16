import { Italic } from 'lucide-react';
import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Text } from 'react-native';

export default function FormComponent({ state }) {
  console.log('state nya adalah: ', state);

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validate =({email, password}) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail){
        setError({
            messagePasswordError: 'Password kurang dari 7'
        })

        return false;
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
});
