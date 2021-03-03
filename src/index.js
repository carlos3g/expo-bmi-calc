import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './Navigation';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from '@screens/Home';

function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0A0F32" />
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </>
  );
}

export default App;
