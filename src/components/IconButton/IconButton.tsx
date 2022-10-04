import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import tw from '../../libs/tailwind';
import { StyledText } from '../Text';

export type IconButtonVariantType = 'primary' | 'secondary' | 'tertiary';

interface IconButton extends TouchableOpacityProps {
  variant?: IconButtonVariantType;
  loading?: boolean;
  children: React.ReactNode;
}

export const IconButton: React.FC<IconButton> = ({
  variant = 'primary',
  loading = false,
  disabled,
  onPress,
  children,
  ...props
}) => {
  const style = getIconButtonStyle(variant, !!disabled);

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const getIconButtonStyle = (
  variant: IconButtonVariantType,
  disabled: boolean,
) => {
  const baseStyle = `justify-center items-center flex-row h-14 w-14`;

  if (disabled) {
    return tw`${baseStyle} bg-primary-200`;
  }

  switch (variant) {
    case 'primary':
      return tw`${baseStyle} bg-transparent border border-border rounded-full`;
  }
};
