import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomCheckBox({ label, onValueChange, value }) {
  const [isChecked, setIsChecked] = useState(value || false);

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onValueChange) {
      onValueChange(newValue); // Mengirimkan status checkbox ke parent
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container} activeOpacity={0.7}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && (
          <Ionicons name="checkmark" size={16} color="white" />
        )}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#007B7F',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: '#007B7F',
    borderColor: '#007B7F',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});
