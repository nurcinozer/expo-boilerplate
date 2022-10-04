import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackNavigatorParamList = {
  OnboardingStack:
    | NavigatorScreenParams<OnboardingStackNavigatorParamList>
    | undefined;
  AppStack: NavigatorScreenParams<AppTabNavigatorParamList> | undefined;
};

export type OnboardingStackNavigatorParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppTabNavigatorParamList = {
  Home: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorParamList {}
  }
}
