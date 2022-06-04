import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { HomeScreen, ResultScreen } from '@screens/';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  transitionSpec: {
    open: TransitionSpecs.RevealFromBottomAndroidSpec,
    close: TransitionSpecs.RevealFromBottomAndroidSpec,
  },
};

const Routes = () => (
  <Navigator screenOptions={screenOptions}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Result" component={ResultScreen} />
  </Navigator>
);

export default Routes;
