import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TopUpScreen = () => {
  const [amount, setAmount] = useState('100.000');
  const [paymentMethod, setPaymentMethod] = useState('BYOND Pay');
  const [notes, setNotes] = useState('');

  return (
    <SafeAreaProvider>
        <View style={styles.header}>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
                <Ionicons name= 'chevron-back' size={20} color='black'></Ionicons>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft:5}}>Top Up</Text>
            </View> 
        </View>

        <View style={styles.container}>         
            <View style={styles.section}>
                <Text style={styles.label}>Amount</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.currency}>IDR</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
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

            <TouchableOpacity style={styles.button} onPress={() => alert('Top Up Successful!')}>
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
