import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useState } from 'react';
import { View } from 'react-native';
import {
  Container,
  StyledButton,
  StyledInput,
  StyledText,
} from '../../../components';
import { KeyboardAvoidingWrapper } from '../../../components/KeyboardAvoiding';
import tw from '../../../libs/tailwind';
import { SignUpSchema } from '../schema';

export const SignupScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <Container>
        <StyledText variant="primary-semibold" style={tw`text-3xl text-white`}>
          Sign Up
        </StyledText>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={SignUpSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <View style={tw`mt-8 mb-5`}>
                <StyledInput
                  label="Name"
                  placeholder="Your Name"
                  returnKeyType="go"
                  autoCorrect={false}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <StyledInput
                  label="Email"
                  placeholder="Your Email"
                  returnKeyType="go"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <StyledInput
                  label="Password"
                  placeholder="Your Password"
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  autoCorrect={false}
                  returnKeyType="go"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </View>
              <View>
                <StyledButton
                  text="Create Account"
                  onPress={() => {
                    handleSubmit();
                    navigation.navigate('OnboardingStack', {
                      screen: 'SignIn',
                    });
                  }}
                />
                <StyledText
                  variant="secondary-medium"
                  style={tw`text-center mt-5 text-label`}
                >
                  Already have an account?{' '}
                  <StyledText
                    variant="primary-semibold"
                    style={tw`text-primary-600`}
                    onPress={() => {
                      navigation.navigate('OnboardingStack', {
                        screen: 'SignIn',
                      });
                    }}
                  >
                    Sign In
                  </StyledText>
                </StyledText>
              </View>
            </>
          )}
        </Formik>
      </Container>
    </KeyboardAvoidingWrapper>
  );
};
