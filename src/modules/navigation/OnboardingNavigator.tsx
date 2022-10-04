import { createStackNavigator } from '@react-navigation/stack';
import { SigninScreen, SignupScreen } from '../onboarding';
import { OnboardingStackNavigatorParamList } from './types';

const Stack = createStackNavigator<OnboardingStackNavigatorParamList>();

export const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
};
