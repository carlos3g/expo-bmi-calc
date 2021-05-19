import React from 'react';

import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import { ResultScreen, HomeScreen } from '@screens/';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
};

const options = {
  transitionSpec: {
    open: TransitionSpecs.RevealFromBottomAndroidSpec,
    close: TransitionSpecs.RevealFromBottomAndroidSpec,
  },
};

function Routes() {
  return (
    <Navigator screenOptions={screenOptions} options={options}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Result" component={ResultScreen} />
    </Navigator>
  );
}

export default Routes;
