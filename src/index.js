import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Routes from './navigation';

function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0A0F32" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

export default App;
