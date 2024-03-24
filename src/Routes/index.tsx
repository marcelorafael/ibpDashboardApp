// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPresentation from '../presentation/LoginPresentation';
import HomePresentation from '../presentation/HomePresentation';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPresentation"
          component={LoginPresentation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePresentation"
          component={HomePresentation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;