import React from 'react';



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginPresentation from '../../presentation/LoginPresentation';

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginPresentation"
                component={LoginPresentation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}