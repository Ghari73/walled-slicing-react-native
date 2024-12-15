import React from 'react';
import LoginScreen from './login';
import RegisterScreen from './register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TermsCon from './termsCon';
import Home from './home';
import TransferScreen from './transfer';
import TopUpScreen from './topup';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Terms and Condition" component={TermsCon}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Transfer" component={TransferScreen}/>
        <Stack.Screen name="Top Up" component={TopUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

