import React from 'react';

import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';

import { ResultScreen, HomeScreen } from '@screens/';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
};

function Routes() {
  return (
    <Navigator
      screenOptions={screenOptions}
      options={{
        transitionSpec: {
          open: TransitionSpecs.RevealFromBottomAndroidSpec,
          close: TransitionSpecs.RevealFromBottomAndroidSpec,
        },
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Result" component={ResultScreen} />
    </Navigator>
  );
}

export default Routes;
