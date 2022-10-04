import Constants from 'expo-constants';
import { View } from 'react-native';
import tw from '../../libs/tailwind';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View
      style={tw.style('flex-1 bg-dark p-6', {
        paddingTop: Constants.statusBarHeight + 40,
      })}
    >
      {children}
    </View>
  );
};
