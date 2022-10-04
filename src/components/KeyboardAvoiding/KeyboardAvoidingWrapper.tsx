import {
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import tw from '../../libs/tailwind';

interface KeyboardAvoidingWrapperProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
}

export const KeyboardAvoidingWrapper: React.FC<
  KeyboardAvoidingWrapperProps
> = ({
  children,
  behavior = 'padding',
  keyboardVerticalOffset = 0,
  enabled = true,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      keyboardVerticalOffset={keyboardVerticalOffset}
      enabled={enabled}
      style={tw`flex-1 bg-dark`}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
