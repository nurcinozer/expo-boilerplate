import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import tw from '../../libs/tailwind';
import { StyledText } from '../Text';

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary';

interface Button extends TouchableOpacityProps {
  variant?: ButtonVariantType;
  loading?: boolean;
  text: string;
}

export const StyledButton: React.FC<Button> = ({
  variant = 'primary',
  loading = false,
  disabled,
  text,
  onPress,
  ...props
}) => {
  const style = getButtonStyle(variant, !!disabled);
  const labelStyle = getLabelStyle(variant, !!disabled);

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <StyledText style={labelStyle} variant="primary-semibold">
        {text}
      </StyledText>
    </TouchableOpacity>
  );
};

export const getButtonStyle = (
  variant: ButtonVariantType,
  disabled: boolean,
) => {
  const baseStyle = `justify-center items-center rounded-12 flex-row px-3 h-16 text-white bg-primary-600 ios:py-1 font-rubik-semibold`;

  if (disabled) {
    return tw`${baseStyle} bg-primary-200`;
  }

  switch (variant) {
    case 'primary':
      return tw`${baseStyle} bg-primary-600`;
  }
};

export const getLabelStyle = (
  variant: ButtonVariantType,
  disabled: boolean,
) => {
  const baseStyle = `text-white text-lg`;

  if (disabled) {
    return tw`${baseStyle} text-primary-300`;
  }

  switch (variant) {
    case 'primary':
      return tw`${baseStyle} text-white`;
  }
};
