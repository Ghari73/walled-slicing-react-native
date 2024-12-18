import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuth } from './context/authContext';


function reverseFormatNumber(val,locale){
  var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
  var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
  var reversedVal = val.replace(new RegExp('\\' + group, 'g'), '');
  reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
  return Number.isNaN(reversedVal)?0:reversedVal;
}
const TopUpScreen = ({navigation}) => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('BYOND Pay');
  const [notes, setNotes] = useState('');
  const [errorAmount, setErrorAmount] = useState('');
const [error, setError] = useState('');
  const [loading, setLoading] = useState('')

  const {transferTopUp: authTransferTopUp, user, userData} = useAuth()
  const topUp = async () =>{
   
    let dataTopUp = {
      type: 'c',
      amount: amount,
      from_to: userData.account_no
    }
    
    if (notes){
      dataTopUp.description = notes
    }
    
    if (!amount){
      Alert.alert('Validation Error', 'receiver and amount cannot be empty!')
    } else{
      setLoading(true)
      try{
        console.log(user.token, dataTopUp)
        const newTrans = await authTransferTopUp(user.token, dataTopUp)
        Alert.alert('Success')
        navigation.navigate('Home')

      } catch (error){
        setError(error)
        Alert.alert(errorFetch.toString())
      }
    }
  }

  const validateAmount = () =>{
    if (amount <= 0){
        setErrorAmount('Nominal tidak valid')
    } else{
        setErrorAmount('')
    }
  }
  return (
    <SafeAreaProvider>
        <View style={styles.container}>         
            <View style={styles.section}>
                <Text style={styles.label}>Amount</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.currency}>IDR</Text>
                    <TextInput
                          style={styles.input}
                          keyboardType="numeric"
                          value={amount== 0 ? '0' : Intl.NumberFormat('id').format(amount)}
                          onChangeText={(text) => {setAmount(reverseFormatNumber(text, 'id')); validateAmount()}}
                      />
                    {errorAmount !== '' && <Text style={styles.errorText}>{errorAmount}</Text>}
              </View>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={paymentMethod}
                    onValueChange={(itemValue) => setPaymentMethod(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="BYOND Pay" value="BYOND Pay" />
                    <Picker.Item label="Other Payment" value="Other Payment" />
                </Picker>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Notes</Text>
                <TextInput
                style={styles.textArea}
                value={notes}
                onChangeText={setNotes}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => topUp()}>
                <Text style={styles.buttonText}>Top Up</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfd',
  },
  header: {
    marginBottom: 5,
    backgroundColor: '#ffffff',
    padding:20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop:15
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    padding:20
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
  },
  currency: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 30,
  },
  pickerContainer: {
    borderColor: '#323468',
    borderRadius: 5,
    paddingHorizontal:5
  },
  picker: {
    height: 80,
    width: '100%',
    backgroundColor:'#ffffff'
    
  },
  textArea: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,

  },
  button: {
    position: 'absolute',   
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2A9999',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopUpScreen;
