import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

import Perfil from './app/perfil/index';
import UserProfile from './app/tela principal/index';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Alexandria: require('./assets/fonts/Alexandria-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontFamily: 'Alexandria',
            },
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            title: 'Perfil',
            headerTitleStyle: {
              fontFamily: 'Alexandria',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

