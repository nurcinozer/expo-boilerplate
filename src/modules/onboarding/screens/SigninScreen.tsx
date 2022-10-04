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
import { Formik } from 'formik';
import { SignInSchema } from '../schema';
import { useNavigation } from '@react-navigation/native';
export const SigninScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <Container>
        <StyledText variant="primary-semibold" style={tw`text-3xl text-white`}>
          Sign In
        </StyledText>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('AppStack', {
              screen: 'Home',
            });
          }}
          validationSchema={SignInSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <View style={tw`mt-8 mb-5`}>
                <StyledInput
                  label="Email"
                  placeholder="Your Email"
                  returnKeyType="go"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  error={!!errors.email}
                  helperText={errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
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
                <StyledButton text="Sign In" onPress={() => handleSubmit()} />
                <StyledText
                  variant="secondary-medium"
                  style={tw`text-center mt-5 text-label`}
                >
                  Forgot Password?{' '}
                  <StyledText
                    variant="primary-semibold"
                    style={tw`text-primary-600`}
                    onPress={() => {
                      console.log('Forgot Password');
                    }}
                  >
                    Reset
                  </StyledText>
                </StyledText>
                <StyledText
                  variant="secondary-medium"
                  style={tw`text-center mt-5 text-label`}
                >
                  Don't have an account?{' '}
                  <StyledText
                    variant="primary-semibold"
                    style={tw`text-primary-600`}
                    onPress={() => {
                      navigation.navigate('OnboardingStack', {
                        screen: 'SignUp',
                      });
                    }}
                  >
                    Sign Up
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
