import React, { useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import img from '~/assets/backgr.jpg';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Strong,
  Logo,
  TouchableKeyboardDismiss,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function validateIsEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  async function handleSubmit() {
    if (
      !username ||
      !password ||
      !passwordConfirm
    ) {
      Alert.alert(
        'Fields are missing',
        'Please fill all the required fields'
      );
    } else if (password !== passwordConfirm) {
      Alert.alert(
        'Validation failed',
        'Passwords are different'
      );
    } else if (!validateIsEmail(username)) {
      Alert.alert(
        'Validation failed',
        'Please inform a valid email.'
      );
    } else {
      dispatch(
        signUpRequest(username, password)
      );
    }
  }

  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={0}
      style={{ flex: 1, height: '100%' }}
      source={img}
    >
      <Background>
        <TouchableKeyboardDismiss onPress={() => Keyboard.dismiss()}>
          <Container>
            <Logo resizeMode="contain" source={logo} />
            <Form>
              <FormInput
                icon="mail-outline"
                placeholder="E-mail"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <FormInput
                icon="lock-outline"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordConfirmRef.current.focus()}
              />
              <FormInput
                icon="lock-outline"
                placeholder="Password confirm"
                value={passwordConfirm}
                onChangeText={setPasswordConfirm}
                secureTextEntry
                ref={passwordConfirmRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
              />
              <TouchableOpacity onPress={() => handleSubmit()}>
                <SubmitButton loading={loading} onPress={handleSubmit}>
                  Sign Up
                </SubmitButton>
              </TouchableOpacity>
            </Form>
            <SignLink onPress={() => navigation.navigate('SignIn')}>
              <SignLinkText>
                <Strong>Already have an account?</Strong>
              </SignLinkText>
            </SignLink>
          </Container>
        </TouchableKeyboardDismiss>
      </Background>
    </ImageBackground>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
