import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Simple Counter</Text>
        
      </View>
      <View style={styles.body}>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter(counter + 1)}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => setCounter(0)}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 20,
    backgroundColor: '#162447',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#e8f1f2',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
    color: '#e8f1f2',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1f4068',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: '#e43f5a',
  },
  buttonText: {
    color: '#e8f1f2',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;

