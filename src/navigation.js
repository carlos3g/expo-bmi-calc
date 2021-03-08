import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ResultScreen from '@screens/Result';
import HomeScreen from '@screens/Home';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function Routes() {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Result" component={ResultScreen} />
    </Navigator>
  );
}

export default Routes;
