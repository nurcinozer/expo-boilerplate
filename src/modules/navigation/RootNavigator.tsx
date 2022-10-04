import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackNavigator } from './OnboardingNavigator';
import { RootStackNavigatorParamList } from './types';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { AppTabNavigator } from './AppNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

const RootStack = createStackNavigator<RootStackNavigatorParamList>();
export const navigationRef = createNavigationContainerRef();

const OPTIONS = {
  headerShown: false,
  header: () => <SafeAreaView style={{ backgroundColor: 'transparent' }} />,
};

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="OnboardingStack">
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingStackNavigator}
          options={OPTIONS}
        />
        <RootStack.Screen
          name="AppStack"
          component={AppTabNavigator}
          options={OPTIONS}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
