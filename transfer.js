import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const TopUpScreen = () => {
  const [amount, setAmount] = useState('100.000');
  const [paymentMethod, setPaymentMethod] = useState('BYOND Pay');
  const [notes, setNotes] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
            <View style={{ flexDirection:'row' }}>
                <Ionicons name= 'chevron-back' size={25} color='black'></Ionicons>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Top Up</Text>
            </View> 
        </View>

      {/* Amount Input */}
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

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.label}>Payment Method</Text>
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
      </View>

      {/* Notes */}
      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter your notes here..."
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>

      {/* Top Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Top Up Successful!')}>
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
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
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 80,
    textAlignVertical: 'top',
    padding: 10,
  },
  button: {
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
