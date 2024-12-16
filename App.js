import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TermsCon from './termsCon';
import Home from './home';
import TransferScreen from './transfer';
import TopUpScreen from './topup';
import LoginScreen2 from './login2';
import RegisterScreen2 from './register2';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login2">
        <Stack.Screen name="Login2" component={LoginScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="Register2" component={RegisterScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="Terms and Condition" component={TermsCon}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Transfer" component={TransferScreen}/>
        <Stack.Screen name="Top Up" component={TopUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

