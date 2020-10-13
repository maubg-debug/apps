import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStackScreens from './AuthStackScreens';

export default function AppStackScreens() {
    const AppStack = createStackNavigator()

    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Auth" component={AuthStackScreens} />
        </AppStack.Navigator>
  );
}
