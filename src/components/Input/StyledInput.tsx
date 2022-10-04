import {
  TextInput,
  ColorValue,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import tw from '../../libs/tailwind';
import { HidePasswordIcon, ShowPasswordIcon } from '../Icons';
import { StyledText } from '../Text';

export interface StyledInputProps extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  color?: ColorValue;
  isPassword?: boolean;
  hidePassword?: boolean;
  setHidePassword?: (value: boolean) => void;
}

export const StyledInput: React.FC<StyledInputProps> = ({
  label,
  error,
  color = '#FFF',
  isPassword,
  hidePassword,
  setHidePassword,
  helperText,
  ...props
}) => {
  const style = getTextInputStyle(error);
  return (
    <View style={tw`my-5`}>
      {!!label && (
        <StyledText
          style={tw`mb-1 text-xs text-label`}
          variant="secondary-medium"
        >
          {label}
        </StyledText>
      )}
      <TextInput style={style} {...props} placeholderTextColor={color} />
      {isPassword && (
        <TouchableOpacity
          style={tw`absolute right-0 top-0 mt-10 mr-1`}
          onPress={() => setHidePassword?.(!hidePassword)}
        >
          {hidePassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </TouchableOpacity>
      )}
      {error && (
        <StyledText
          style={tw`mt-2 text-error text-sm`}
          variant="primary-semibold"
        >
          {helperText}
        </StyledText>
      )}
    </View>
  );
};

export const getTextInputStyle = (error?: boolean) => {
  const baseStyle = `border-b-2 w-full flex-row h-13 text-white ios:py-1 font-poppins-medium`;

  if (error) {
    return tw`${baseStyle} border-error`;
  } else {
    return tw`${baseStyle} border-border`;
  }
};
