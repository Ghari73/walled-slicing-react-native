import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TransferScreen = () => {
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('BYOND Pay');
  const [notes, setNotes] = useState('');
  const [errorAmount, setErrorAmount] = useState('');

  const validateAmount = () =>{
    if (amount < 0){
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
                        onChangeText={(text) => setAmount(reverseFormatNumber(text, 'id'))}
                    />
                  {errorAmount !== '' && <Text style={styles.errorText}>{errorAmount}</Text>}
                    
                </View>

                <View style={styles.balanceContainer}>
                  <Text style={styles.balanceLabel}>Balance</Text>
                  <Text style={styles.balanceValue}>Rp 10.000.000</Text>
                </View>
            </View>

            

            <View style={styles.section}>
                <Text style={styles.label}>Notes</Text>
                <TextInput
                style={styles.textArea}
                value={notes}
                onChangeText={setNotes}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => alert('Transfer Successful!')}>
                <Text style={styles.buttonText}>Transfer</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  );
};
function reverseFormatNumber(val,locale){
  var group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
  var decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
  var reversedVal = val.replace(new RegExp('\\' + group, 'g'), '');
  reversedVal = reversedVal.replace(new RegExp('\\' + decimal, 'g'), '.');
  return Number.isNaN(reversedVal)?0:reversedVal;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfd',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
    fontStyle: 'italic'
  },
  header: {
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
  greenContainer: {
    backgroundColor: '#2A9999',
    padding:15,
  },
  greenText: {
    color: '#ffffff',
    fontSize: 16,
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
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'gray',
  },
  balanceValue: {
    fontSize: 14,
    color: '#2A9999',
  },
});

export default TransferScreen;
