import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TermsCon from './termsCon';
import Home from './home';
import TransferScreen from './transfer';
import TopUpScreen from './topup';
import LoginScreen2 from './login2';
import RegisterScreen2 from './register2';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Authprovider } from './context/authContext';
import { useAuth } from './context/authContext';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Transfer') {
            iconName = focused ? 'swap-horizontal' : 'swap-horizontal-outline';
          } else if (route.name === 'Top Up') {
            iconName = focused ? 'cash' : 'cash-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Transfer" component={TransferScreen}/>
      <Tab.Screen name="Top Up" component={TopUpScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Authprovider>
      <Route></Route>
    </Authprovider>
  );
};

const Route = () =>{
  
  const {user} = useAuth();
  console.log(user)
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login2">
        {user? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          </>
        ) : (
          <>
          <Stack.Screen name="Login2" component={LoginScreen2} options={{ headerShown: false }} />
          <Stack.Screen name="Register2" component={RegisterScreen2} options={{ headerShown: false }} />
          </>
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;

