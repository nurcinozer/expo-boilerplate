import { Container, StyledText } from '../../../../components';
import tw from '../../../../libs/tailwind';

export const HomeScreen = () => {
  return (
    <Container>
      <StyledText variant="primary-semibold" style={tw`text-3xl text-white`}>
        Home Screen
      </StyledText>
    </Container>
  );
};
