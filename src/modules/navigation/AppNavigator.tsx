import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../app/Home/screens';
import { AppTabNavigatorParamList } from './types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HomeIcon } from '../../components/Icons';
import { StyledText } from '../../components';
import tw from '../../libs/tailwind';

const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

const TabBarLabel: React.FC<{ label: string; focused: boolean }> = ({
  label,
  focused,
}) => {
  return (
    <StyledText
      variant="secondary-medium"
      style={tw.style('font-poppins-medium text-sm -mt-4', {
        color: focused ? '#3C71FF' : '#A6A7BC',
      })}
    >
      {label}
    </StyledText>
  );
};

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }
        },
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarLabel: ({ focused }) => (
          <TabBarLabel label={route.name} focused={focused} />
        ),
        tabBarActiveTintColor: '#3C71FF',
        tabBarInactiveTintColor: '#A6A7BC',
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#303342',
    borderTopWidth: 0,
    height: 97,
  },
});
