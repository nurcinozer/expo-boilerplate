import { Text, TextProps } from 'react-native';
import tw from '../../libs/tailwind';

type StyledTextVariantType =
  | 'primary-regular'
  | 'primary-semibold'
  | 'primary-medium'
  | 'secondary-medium';

interface StyledTextProps extends TextProps {
  variant?: StyledTextVariantType;
}

export const StyledText: React.FC<StyledTextProps> = ({
  children,
  style,
  variant = 'primary-regular',
  ...props
}) => (
  <Text {...props} style={[style, tw`${getFontFamily(variant)}`]}>
    {children}
  </Text>
);

const getFontFamily = (variant: StyledTextVariantType) => {
  if (variant === 'primary-regular') {
    return 'font-rubik-regular';
  } else if (variant === 'primary-semibold') {
    return 'font-rubik-semibold';
  } else if (variant === 'primary-medium') {
    return 'font-rubik-medium';
  } else if (variant === 'secondary-medium') {
    return 'font-poppins-medium';
  } else {
    return 'font-sans';
  }
};
