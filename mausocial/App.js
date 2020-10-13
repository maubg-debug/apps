import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppStackScreens from './src/stacks/AppStackScreens';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreens />
    </NavigationContainer>
  );
}
