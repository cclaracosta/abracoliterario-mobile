import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from './app/perfil/index';
import UserProfile from './app/tela principal/index'; 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
