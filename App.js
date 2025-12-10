import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from './app/perfil/index';
import UserProfile from './tela principal/index';

import { 
  useFonts, 
  Alexandria_400Regular, 
  Alexandria_700Bold 
} from '@expo-google-fonts/alexandria';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Alexandria_400Regular,
    Alexandria_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
