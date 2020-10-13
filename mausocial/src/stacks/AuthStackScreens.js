import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignInScreens from '../screens/SignInScreen';
import SignUpScreens from '../screens/SignUpScreen';

export default function AuthStackScreens() {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignInScreens} />
            <AuthStack.Screen name="SignUp" component={SignUpScreens} />
        </AuthStack.Navigator>
  );
}
